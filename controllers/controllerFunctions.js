const products = require("../models/schema")

const getRequest = async (req, res) => {
    const { featured, company, name, sort, fields, limit, skip, numericFilter } = req.query
    const queryObject = {}
    let selector = ''
    if (fields)
        selector = fields.trim().replaceAll(',', ' ')
    let sorter = ''
    if (sort)
        sorter = sort.trim().replaceAll(',', ' ')
    if (featured) {
        queryObject.featured = featured === 'true' ? true : false;
    }
    if (company) {
        queryObject.company = company;
    }
    if (name) {
        queryObject.name = { $regex: name, $options: 'i' };
    }
    if (numericFilter) {
        const operatorMap = {
            '>': '$gt',
            '>=': '$gte',
            '<': '$lt',
            '<=': '$lte',
            '=': '$eq',
        }
        const regEx = /\b(<|>|>=|<=|=)\b/g
        let filters = numericFilter.replace(regEx, (match) => `-${operatorMap[match]}-`)
        const options = ['price', 'rating']
        filters = filters.split(',').forEach((item) => {
            const [field, operator, value] = item.split('-')
            if (options.includes(field)) {
                queryObject[field] = { [operator]: Number(value) }
            }
        });
    }
    let product = products.find(queryObject)
    if (sort) {
        product = product.sort(sorter)
    }
    if (fields) {
        product = product.select(selector)
    }
    if (limit) {
        product = product.limit(limit)
    }
    if (skip) {
        product = product.skip(skip)
    }
    const result = await product
    res.status(200).json(result)
}

module.exports = {
    getRequest,
}