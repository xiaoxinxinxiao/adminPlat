const blokUrl = {
    // 添加类型种类
    addTypeTitleName: '/api/v1/saveTitleName',
    // 获取类型列表
    getListTypeName: '/api/v1/listTypeName',
    // 删除用户列表信息
    deleteTypeNameById: '/api/v1/deleteTitleNameById/{id}?id={id}',
    update: '/api/v1/upDataTitleInfo/{id}?id={id}',
    getArticleByType: '/api/v1/getArticle/{typeName}?page={page}&size={size}'
}

export default blokUrl;