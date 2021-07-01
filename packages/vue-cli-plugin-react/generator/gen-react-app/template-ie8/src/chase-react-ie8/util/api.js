import axios from './axios';

export const delay = (time) => new Promise((resolve) => setTimeout(() => resolve(), time));
// 具体的各个请求方法
export default {
  /** -------------------------------------------------- 登录 ---------------------------------------------------------*/
  // 登录
  doLogin(loginInfo) {
    return axios.post('/user/login', loginInfo);
  },
  // 登出
  doLogout() {
    return axios.post('/user/logout');
  },
  /** -------------------------------------------------- 菜单 ---------------------------------------------------------*/
  // 获取菜单
  getMenu() {
    return axios.get('/menu/config');
  },
  /** ------------------------------------------------- 政策检索 -------------------------------------------------------*/
  // 政策检索
  selectPolicyList(searchInfo) {
    return axios.post('/policy/search', searchInfo);
  },
  // 政策文件预览
  searchPreviewPolicy(policyId) {
    return axios.get(`/policy/search/file/${policyId}`);
  },
  // 政策分享
  sharePolicy(policyId) {
    return axios.get(`/policy/search/share/${policyId}`);
  },
  // 政策收藏
  collectPolicy(policyId, isFavorite) {
    return axios.post(`/policy/search/favorite/${policyId}/${isFavorite}`);
  },
  /** ------------------------------------------------- 政策解析 -------------------------------------------------------*/
  // 分页查询解析表
  getAnalysisTableList(queryPage) {
    return axios.post(`/analysis/table/page`, queryPage);
  },
  // 删除解析表
  deleteAnalysisTable(analysisId) {
    return axios.post(`/analysis/table/delete/${analysisId}`);
  },
  // 获取解析表信息
  getAnalysisTable(analysisId) {
    return axios.get(`/analysis/table/get/${analysisId}`);
  },
  // 保存解析表
  saveAnalysisTable(data) {
    return axios.post(`/analysis/table/save`, data);
  },
  // 获取解析表头
  getAnalysisTableHeader() {
    return axios.get('/extend/field/list?fieldScene=ANALYSIS&status=Y');
  },
  // 获取解析表头
  getAnalysisAddedHeaders(analysisId) {
    return axios.get(`/analysis/table/get/${analysisId}`);
  },
  // 获取附件列表
  getAttachmentList(analysisId) {
    return axios.get(`/analysis/attachment/list/${analysisId}`);
  },
  // 删除附件
  deleteAttachment(attachmentId) {
    return axios.post(`/analysis/attachment/delete/${attachmentId}`);
  },
  // 获取更新记录
  getUpdateRecordList(analysisId, pageRequest) {
    return axios.post(`/analysis/version/page/${analysisId}`, pageRequest);
  },
  // 获取关联规则列表
  getAssociationRuleList(dataId) {
    return axios.get(`/analysis/data/rule/list/${dataId}`);
  },
  // 删除关联关系
  deleteAssociationRule(relationId) {
    return axios.post(`/analysis/data/rule/delete/${relationId}`);
  },
  // 获取规则列表
  getRuleList(request) {
    return axios.post(`/analysis/data/rule/wise/search`, request);
  },
  // 保存关联关系
  saveAssociationRule(dataId, ruleIdList) {
    return axios.post(`/analysis/data/rule/save/${dataId}`, ruleIdList);
  },
  /** ------------------------------------------------ 热搜词配置 ------------------------------------------------------*/
  // 获取热搜词
  getHotWords() {
    return axios.post('/hot/keyword/query');
  },
  // 保存热搜词
  saveHotWords(hotKeyWordList) {
    return axios.post('/hot/keyword/save', hotKeyWordList);
  },
  /** ----------------------------------------------- 发文机关配置 -----------------------------------------------------*/
  // 获取发文机关
  getIssuingAuthority() {
    return axios.post('/bureau/queryBureauInfo');
  },
  // 删除校验发文机关是否被政策使用
  validateIssuingAuthorityDelete(info) {
    return axios.post('/bureau/deleteBureauInfo', info);
  },
  // 保存发文机关
  saveIssuingAuthority(json) {
    return axios.post('/bureau/saveBureauInfo', json);
  },
  /** --------------------------------------- 属性配置（政策扩展属性、表头字段） ----------------------------------------*/
  // 获取政策扩展属性配置和表头字段配置
  getAttributeConfig(fieldScene) {
    return axios.get(`/extend/field/list?fieldScene=${fieldScene}`);
  },
  // 获取某一条政策扩展属性配置和表头字段配置
  getAttributeConfigByFieldId(fieldId) {
    return axios.get(`/extend/field/${fieldId}`);
  },
  // 删除政策扩展属性配置和表头字段配置
  deleteAttributeConfig(fieldId) {
    return axios.post(`/extend/field/${fieldId}/delete`);
  },
  // 获取政策扩展属性配置和表头字段配置中的值域
  getAttributeConfigRange(fieldId) {
    return axios.get(`/extend/field/${fieldId}/dim`);
  },
  // 保存政策扩展属性配置和表头字段配置
  saveAttributeConfig(fieldInfo) {
    return axios.post('/extend/field/save', fieldInfo);
  },

  // 政策文件首页分页数据
  getPolicyList: (payload) => {
    return axios.post('/policy/manager/page', payload);
  },
  // 政策文件自定义属性列
  getPolicyExtendFields: () => {
    return axios.get('/extend/field/list?fieldScene=POLICY&status=Y');
  },

  getPolicyAllWithEffectived: () => {
    return axios.post(`/policy/manager/get/dropdown`);
  },

  getAllValidTerms: (policyId) => {
    return axios.post(`/term/manager/effectiveness/queryAll/${policyId}`);
  },

  // 更新相关政策文件
  updatePolicyRealitons(id, payload) {
    return axios.post(`/policy/manager/${id}/relation/save`, payload);
  },

  updatePolicyExtendFields(id, payload) {
    return axios.post(`/extend/field/saveFieldValue/${id}`, payload);
  },

  // 保存政策文件
  savePolicy(payload) {
    return axios.post(`/policy/manager/save`, payload);
  },

  // 查询政策文件
  getPolicy(id) {
    return axios.get(`/policy/manager/query/${id}`);
  },

  // 查询政策文件
  previewPolicy(id) {
    return axios.get(`/policy/manager/preview/${id}`);
  },

  // 删除政策文件
  deletePolicy(id) {
    return axios.get(`/policy/manager/delete/${id}`);
  },

  // 政策条款管理
  getTermList(payload) {
    return axios.post(`/term/manager/page`, payload);
  },

  deleteTerm(id) {
    return axios.get(`/term/manager/delete/${id}`);
  },

  getTerms(id) {
    return axios.get(`/policy/manager/term/split/query/${id}`);
  },

  saveTerms(id, list) {
    return axios.post(`/policy/manager/term/split/save/${id}`, list);
  },

  getPolicyEffectiveness(policyId) {
    return axios.post(`/policy/manager/effectiveness/query/${policyId}`);
  },

  savePolicyEffectiveness(payload) {
    return axios.post(`/policy/manager/effectiveness/save`, payload);
  },

  getTermEffectiveness(termId) {
    return axios.post(`/term/manager/effectiveness/query/${termId}`);
  },

  saveTermEffectiveness(payload) {
    return axios.post(`/term/manager/effectiveness/save`, payload);
  },

  getAnnotationList(policyId) {
    return axios.post(`/policy/manager/annotation/query/${policyId}`);
  },
  saveGetAnnotationList(payload) {
    return axios.post(`/policy/manager/annotation/save`, payload);
  },
  getAnalysisEditTable(payload) {
    return axios.post('/analysis/data/page', payload);
    /* return delay(1000).then(() => {
      const {pageIndex, pageSize, keyword} = payload
      return {
        value: {
          total: 99,
          records: Array.from({ length: pageSize }).map((_v, i) => {
            return {
              abc:
                `pageIndex-${pageIndex}: row-${i}${keyword}` +
                `${keyword ? `keyword:${keyword}` : ''}`,
              dataId: i === 0 ? '9527' : Date.now()
            };
          })
        }
      }
    }) */
  },
  getAnalysisItemData(dataId) {
    return axios.get(`/analysis/data/get/${dataId}`);
  },
  saveAnalysisItemData(payload) {
    return axios.post(`/analysis/data/save`, payload);
  },
  saveAnalysisTerms(payload) {
    return axios.post(`/analysis/data/term/save`, payload);
  },
  checkAnalysisTerm(termId) {
    return axios.get(`/policy/manager/term/split/del/${termId}`);
  },
  removeAnalysisTerm(dataId, frontVersionId) {
    return axios.post(`/analysis/data/delete/${dataId}?frontVersionId=${frontVersionId}`);
  }
};
