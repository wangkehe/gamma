// 使用node运行

var express = require('express');
var app = express();
var fs = require("fs");

var treeMeun = [{
  id: 10,
  title: '我的工作',
  icon: 'dashboard',
  isOpen: false,
  items: [{
    id: 1001,
    title: ' Dashboard ',
    icon: 'fa fa-circle-o',
    url: '/dashboard',
    selected: false
  }]
}, {
  id: 100,
  title: '客户管理',
  icon: 'user',
  isOpen: false,
  items: [{
    id: 10011,
    title: '客户视图',
    icon: 'fa fa-circle-o',
    url: '/customer/view',
    selected: false
  }, {
    id: 10012,
    title: '信息采集',
    icon: 'fa fa-circle-o',
    url: '/customer/information',
    selected: false
  }, {
    id: 10013,
    title: '客户关系',
    icon: 'fa fa-circle-o',
    url: '/customer/relations',
    selected: false
  }, {
    id: 10014,
    title: '客户评价',
    icon: 'fa fa-circle-o',
    url: '/defaultView',
    selected: false
  }]
}, {
  id: 200,
  title: '数据查询',
  icon: 'search',
  isOpen: false,
  items: [{
    id: 20011,
    title: 'CCIS流水查询',
    icon: 'fa fa-files-o',
    url: '/query/ccis',
    selected: false
  }, {
    id: 20012,
    title: 'GRBC流水查询',
    icon: 'fa fa-files-o',
    url: '/query/grbc',
    selected: false
  }, {
    id: 20013,
    title: '=======',
    icon: 'fa fa-files-o',
    url: '/defaultView',
    selected: false
  }]
}, {
  id: 300,
  title: '数据分析',
  icon: 'bar-chart',
  isOpen: false,
  items: [{
    id: 20011,
    title: '经营指标分析',
    icon: 'fa fa-files-o',
    url: '/defaultView',
    selected: false
  }, {
    id: 20012,
    title: '业务统计',
    icon: 'fa fa-files-o',
    url: '/defaultView',
    selected: false
  }, {
    id: 20013,
    title: '报表',
    icon: 'fa fa-files-o',
    url: '/defaultView',
    selected: false
  }]
}, {
  id: 400,
  title: '数据管理',
  icon: 'database',
  isOpen: false,
  items: [{
    id: 40011,
    title: '数据下发情况',
    icon: 'fa fa-files-o',
    url: '/dm/dba',
    selected: false
  }, {
    id: 40012,
    title: '数据手工导入',
    icon: 'fa fa-files-o',
    url: '/dm/imp',
    selected: false
  }]
}, {
  id: 500,
  title: '智能收单',
  icon: 'scan',
  isOpen: false,
  items: [{
    id: 50011,
    title: '交易分析',
    icon: 'fa fa-files-o',
    url: '/mcht/view',
    selected: false
  }, {
    id: 50012,
    title: '商户信息',
    icon: 'fa fa-files-o',
    url: '/mcht/info',
    selected: false
  }, {
    id: 50013,
    title: '统计报表',
    icon: 'fa fa-files-o',
    url: '/mcht/report',
    selected: false
  }]
}];

app.all('/treeMenu/list', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/treeMenu/list', function(req, res) {
  res.end(JSON.stringify(treeMeun));
  // res.send('[{"id":10,"title":"我的工作","icon":"fa fa-dashboard","isOpen":true,"items":[{"id":1001,"title":" Dashboard ","icon":"fa fa-circle-o","url":"/dashboard"}]},{"id":100,"title":"客户管理","icon":"fa fa-files-o","isOpen":true,"items":[{"id":10011,"title":"客户视图","icon":"fa fa-circle-o","url":"/customer/view"},{"id":10012,"title":"信息采集","icon":"fa fa-circle-o","url":"/customer/information"},{"id":10013,"title":"客户关系","icon":"fa fa-circle-o","url":"/customer/relations"},{"id":10014,"title":"客户评价","icon":"fa fa-circle-o","url":"/defaultView"}]},{"id":200,"title":"数据查询","icon":"fa fa-laptop","isOpen":false,"items":[{"id":20011,"title":"司法查询","icon":"fa fa-files-o","url":"/judiciary"},{"id":20012,"title":"CCIS历史数据","icon":"fa fa-files-o","url":"/defaultView"},{"id":20013,"title":"GRBC数据","icon":"fa fa-files-o","url":"/defaultView"}]},{"id":300,"title":"数据分析","icon":"fa fa-pie-chart","isOpen":true,"items":[{"id":20011,"title":"经营指标分析","icon":"fa fa-files-o","url":"/defaultView"},{"id":20012,"title":"业务统计","icon":"fa fa-files-o","url":"/defaultView"},{"id":20013,"title":"报表","icon":"fa fa-files-o","url":"/defaultView"}]},{"id":400,"title":"数据管理","icon":"fa fa-pie-chart","isOpen":true,"items":[{"id":40011,"title":"数据下发情况","icon":"fa fa-files-o","url":"/dba"},{"id":40012,"title":"数据手工导入","icon":"fa fa-files-o","url":"/dba"}]}]')
});

app.get('/dm/schList',function(req, res){
  res.send('{"datas":[{"tblName":"OFCR_TF_MC_OLD_NEW_CUST","filenameRule":"s_ofcr_tf_mc_old_new_cust","lastImportDate":1536804539000,"fileDate":"20180831","isAutoUpdate":"1","isActive":"1","dataInterface":"2","fileType":"ALL","ctrlFilename":"imp_s_ofcr_tf_mc_old_new_cust.ctl"},{"tblName":"OFCR_BA_DORMANCY_TABLE","filenameRule":"s_ofcr_ba_dormancy_table","lastImportDate":1536804053000,"fileDate":"20180831","isAutoUpdate":"0","isActive":"1","dataInterface":"2","fileType":"ALL","ctrlFilename":"imp_s_ofcr_ba_dormancy_table.ctl"},{"tblName":"OFCR_BA_INT_INDX_MAST","filenameRule":"s_ofcr_ba_int_indx_mast","lastImportDate":1536804054000,"fileDate":"20180831","isAutoUpdate":"0","isActive":"1","dataInterface":"2","fileType":"ALL","ctrlFilename":"imp_s_ofcr_ba_int_indx_mast.ctl"},{"tblName":"OFCR_CI_IC_TYPES","filenameRule":"s_ofcr_ci_ic_types","lastImportDate":1536804326000,"fileDate":"20180831","isAutoUpdate":"0","isActive":"1","dataInterface":"2","fileType":"ALL","ctrlFilename":"imp_s_ofcr_ci_ic_types.ctl"},{"tblName":"OFCR_TF_CASH_DEPOSIT_BOOK","filenameRule":"s_ofcr_tf_cash_deposit_book","lastImportDate":1536804535000,"fileDate":"20180831","isAutoUpdate":"0","isActive":"1","dataInterface":"2","fileType":"ALL","ctrlFilename":"imp_s_ofcr_tf_cash_deposit_book.ctl"},{"tblName":"OFCR_BA_CCY_RATE","filenameRule":"s_ofcr_ba_ccy_rate","lastImportDate":1536804052000,"fileDate":"20180831","isAutoUpdate":"0","isActive":"1","dataInterface":"2","fileType":"ALL","ctrlFilename":"imp_s_ofcr_ba_ccy_rate.ctl"},{"tblName":"OFCR_TF_MAKE_CARD_PARM","filenameRule":"s_ofcr_tf_make_card_parm","lastImportDate":1536804539000,"fileDate":"20180831","isAutoUpdate":"0","isActive":"1","dataInterface":"2","fileType":"ALL","ctrlFilename":"imp_s_ofcr_tf_make_card_parm.ctl"},{"tblName":"OFCR_TF_MDM_ATTR","filenameRule":"s_ofcr_tf_mdm_attr","lastImportDate":1536804599000,"fileDate":"20180831","isAutoUpdate":"0","isActive":"1","dataInterface":"2","fileType":"ALL","ctrlFilename":"imp_s_ofcr_tf_mdm_attr.ctl"},{"tblName":"OFCR_TF_DATE_SWEEP_REG","filenameRule":"s_ofcr_tf_date_sweep_reg","lastImportDate":1536804537000,"fileDate":"20180831","isAutoUpdate":"0","isActive":"1","dataInterface":"2","fileType":"ALL","ctrlFilename":"imp_s_ofcr_tf_date_sweep_reg.ctl"},{"tblName":"OFCR_BA_PROD_TYPE_MAST","filenameRule":"s_ofcr_ba_prod_type_mast","lastImportDate":1536804054000,"fileDate":"20180831","isAutoUpdate":"0","isActive":"1","dataInterface":"2","fileType":"ALL","ctrlFilename":"imp_s_ofcr_ba_prod_type_mast.ctl"},{"tblName":"OFCR_TF_CIF_VIP_OFFICER","filenameRule":"s_ofcr_tf_cif_vip_officer","lastImportDate":1536804536000,"fileDate":"20180831","isAutoUpdate":"0","isActive":"1","dataInterface":"2","fileType":"ALL","ctrlFilename":"imp_s_ofcr_tf_cif_vip_officer.ctl"},{"tblName":"OFCR_TF_LARGE_DEP_CERT_TRAN","filenameRule":"s_ofcr_tf_large_dep_cert_transfer_reg","lastImportDate":1536804538000,"fileDate":"20180831","isAutoUpdate":"0","isActive":"1","dataInterface":"2","fileType":"ALL","ctrlFilename":"imp_s_ofcr_tf_large_dep_cert_transfer_reg.ctl"},{"tblName":"OFCR_XFACE_ADDL_DETAILS_TXNLOG","filenameRule":"s_ofcr_xface_addl_details_txnlog","lastImportDate":1538730700000,"fileDate":"20180831","isAutoUpdate":"0","isActive":"1","dataInterface":"2","fileType":"ADD","ctrlFilename":"imp_s_ofcr_xface_addl_details_txnlog.ctl"},{"tblName":"DIS_COM_WAN_YUAN_CUST_ADD","filenameRule":"dis_com_wan_yuan_cust_add","lastImportDate":1546222906000,"fileDate":"20181230","isAutoUpdate":"0","isActive":"1","dataInterface":"2","fileType":"ALL","ctrlFilename":"imp_t_dis_com_wan_yuan_cust_add.ctl"},{"tblName":"OFCR_TF_CC_BRN_MAST","filenameRule":"s_ofcr_tf_cc_brn_mast","lastImportDate":1536804535000,"fileDate":"20180831","isAutoUpdate":"1","isActive":"1","dataInterface":"2","fileType":"ALL","ctrlFilename":"imp_s_ofcr_tf_cc_brn_mast.ctl"},{"tblName":"OFCR_MC_ACCT_MAST","filenameRule":"s_ofcr_mc_acct_mast","lastImportDate":1536804414000,"fileDate":"20180831","isAutoUpdate":"0","isActive":"1","dataInterface":"2","fileType":"ALL","ctrlFilename":"imp_s_ofcr_mc_acct_mast.ctl"},{"tblName":"OFCR_TF_ACCT_OPEN_CLOSE_LOG","filenameRule":"s_ofcr_tf_acct_open_close_log","lastImportDate":1536804535000,"fileDate":"20180831","isAutoUpdate":"0","isActive":"1","dataInterface":"2","fileType":"ALL","ctrlFilename":"imp_s_ofcr_tf_acct_open_close_log.ctl"},{"tblName":"OFCR_LN_ACCT_PAYINSTRN","filenameRule":"s_ofcr_ln_acct_payinstrn","lastImportDate":1536804383000,"fileDate":"20180831","isAutoUpdate":"1","isActive":"1","dataInterface":"2","fileType":"ALL","ctrlFilename":"imp_s_ofcr_ln_acct_payinstrn.ctl"},{"tblName":"OFCR_TF_MEDIUM_LOSS_REPORT","filenameRule":"s_ofcr_tf_medium_loss_report","lastImportDate":1536804675000,"fileDate":"20180831","isAutoUpdate":"1","isActive":"1","dataInterface":"2","fileType":"ALL","ctrlFilename":"imp_s_ofcr_tf_medium_loss_report.ctl"},{"tblName":"OFCR_BA_ACCT_STATUS","filenameRule":"s_ofcr_ba_acct_status","lastImportDate":1536804052000,"fileDate":"20180831","isAutoUpdate":"0","isActive":"1","dataInterface":"2","fileType":"ALL","ctrlFilename":"imp_s_ofcr_ba_acct_status.ctl"},{"tblName":"OFCR_BA_CCY_CODE","filenameRule":"s_ofcr_ba_ccy_code","lastImportDate":1536804052000,"fileDate":"20180831","isAutoUpdate":"0","isActive":"1","dataInterface":"2","fileType":"ALL","ctrlFilename":"imp_s_ofcr_ba_ccy_code.ctl"},{"tblName":"OFCR_REC_TXN_LOG","filenameRule":"s_ofcr_rec_txn_log","lastImportDate":1539223169000,"fileDate":"20180831","isAutoUpdate":"0","isActive":"1","dataInterface":"2","fileType":"ADD","ctrlFilename":"imp_s_ofcr_rec_txn_log.ctl"},{"tblName":"OFCR_CH_ACCT_MAST_M","filenameRule":"s_ofcr_ch_acct_mast","lastImportDate":1547708653000,"fileDate":"20181231","isAutoUpdate":"0","isActive":"1","dataInterface":"2","fileType":"ALL","ctrlFilename":"month\\\\imp_s_ofcr_ch_acct_mast_m.ctl"},{"tblName":"DIS_COM_WAN_YUAN_CUST","filenameRule":"dis_com_wan_yuan_cust_stk","lastImportDate":1546222912000,"fileDate":"20181230","isAutoUpdate":"0","isActive":"1","dataInterface":"2","fileType":"ALL","ctrlFilename":"imp_t_dis_com_wan_yuan_cust.ctl"},{"tblName":"OFCR_CH_ACCT_MAST_D","filenameRule":"s_ofcr_ch_acct_mast","lastImportDate":1548845073000,"fileDate":"20181231","isAutoUpdate":"0","isActive":"1","dataInterface":"2","fileType":"ALL","ctrlFilename":"day\\\\imp_s_ofcr_ch_acct_mast_d.ctl"},{"tblName":"OFCR_TD_ACCT_MAST_D","filenameRule":"s_ofcr_td_acct_mast","lastImportDate":1548844948000,"fileDate":"20181231","isAutoUpdate":"0","isActive":"1","dataInterface":"2","fileType":"ALL","ctrlFilename":"day\\\\imp_s_ofcr_td_acct_mast_d.ctl"},{"tblName":"OFCR_TD_DEP_MAST_D","filenameRule":"s_ofcr_td_dep_mast","lastImportDate":1548844966000,"fileDate":"20181231","isAutoUpdate":"0","isActive":"1","dataInterface":"2","fileType":"ALL","ctrlFilename":"day\\\\imp_s_ofcr_td_dep_mast_d.ctl"},{"tblName":"DIS_IFSP_INTGR_TXN_DTL","filenameRule":"t_dis_ifsp_intgr_txn_dtl","lastImportDate":1549005474000,"fileDate":"20190130","isAutoUpdate":"0","isActive":"1","dataInterface":"2","fileType":"ADD","ctrlFilename":"imp_append_dis_ifsp_intgr_txn_dtl"},{"tblName":"PMTS_CCMS_BANKINFO","filenameRule":"s_pmts_ccms_bankinfo","lastImportDate":1536804695000,"fileDate":"20180831","isAutoUpdate":"1","isActive":"1","dataInterface":"2","fileType":"ALL","ctrlFilename":"imp_s_pmts_ccms_bankinfo.ctl"},{"tblName":"OFCR_TF_LN_RCC_ACCT_CRR_MOVE","filenameRule":"s_ofcr_tf_ln_rcc_acct_crr_movement","lastImportDate":1536804538000,"fileDate":"20180831","isAutoUpdate":"1","isActive":"1","dataInterface":"2","fileType":"ALL","ctrlFilename":"imp_s_ofcr_tf_ln_rcc_acct_crr_movement.ctl"},{"tblName":"OFCR_GLM_ACCT_BAL_HIS","filenameRule":"s_ofcr_glm_acct_bal_his","lastImportDate":1536804326000,"fileDate":"20180831","isAutoUpdate":"1","isActive":"1","dataInterface":"2","fileType":"ALL","ctrlFilename":"imp_s_ofcr_glm_acct_bal_his.ctl"},{"tblName":"OFCR_TF_INVENTORY_MAST_DETAIL","filenameRule":"s_ofcr_tf_inventory_mast_detail","lastImportDate":1536804538000,"fileDate":"20180831","isAutoUpdate":"1","isActive":"1","dataInterface":"2","fileType":"ALL","ctrlFilename":"imp_s_ofcr_tf_inventory_mast_detail.ctl"},{"tblName":"OFCR_TF_STOP_INF","filenameRule":"s_ofcr_tf_stop_inf","lastImportDate":1536804676000,"fileDate":"20180831","isAutoUpdate":"1","isActive":"1","dataInterface":"2","fileType":"ALL","ctrlFilename":"imp_s_ofcr_tf_stop_inf.ctl"},{"tblName":"OFCR_TF_CIF_CORP_ADD_INF","filenameRule":"s_ofcr_tf_cif_corp_add_inf","lastImportDate":1536804536000,"fileDate":"20180831","isAutoUpdate":"1","isActive":"1","dataInterface":"2","fileType":"ALL","ctrlFilename":"imp_s_ofcr_tf_cif_corp_add_inf.ctl"},{"tblName":"OFCR_BA_CC_BRN_MAST","filenameRule":"s_ofcr_ba_cc_brn_mast","lastImportDate":1536804053000,"fileDate":"20180831","isAutoUpdate":"1","isActive":"1","dataInterface":"2","fileType":"ALL","ctrlFilename":"imp_s_ofcr_ba_cc_brn_mast.ctl"},{"tblName":"OFCR_TF_CIF_PUB_BLACK_LIST","filenameRule":"s_ofcr_tf_cif_pub_black_list","lastImportDate":1536804536000,"fileDate":"20180831","isAutoUpdate":"1","isActive":"1","dataInterface":"2","fileType":"ALL","ctrlFilename":"imp_s_ofcr_tf_cif_pub_black_list.ctl"},{"tblName":"OFCR_TD_PROD_RATES","filenameRule":"s_ofcr_td_prod_rates","lastImportDate":1536804481000,"fileDate":"20180831","isAutoUpdate":"1","isActive":"1","dataInterface":"2","fileType":"ALL","ctrlFilename":"imp_s_ofcr_td_prod_rates.ctl"},{"tblName":"OFCR_CH_SWEEP_OUT_TXN_LOGS","filenameRule":"s_ofcr_ch_sweep_out_txn_logs","lastImportDate":1536804176000,"fileDate":"20180831","isAutoUpdate":"1","isActive":"1","dataInterface":"2","fileType":"ALL","ctrlFilename":"imp_s_ofcr_ch_sweep_out_txn_logs.ctl"},{"tblName":"OFCR_GLTM_GLMASTER","filenameRule":"s_ofcr_gltm_glmaster","lastImportDate":1536804327000,"fileDate":"20180831","isAutoUpdate":"1","isActive":"1","dataInterface":"2","fileType":"ALL","ctrlFilename":"imp_s_ofcr_gltm_glmaster.ctl"},{"tblName":"ECIF_ECIF_CERT_INFO","filenameRule":"s_ecif_ecif_cert_info","lastImportDate":1536804041000,"fileDate":"20180831","isAutoUpdate":"0","isActive":"1","dataInterface":"2","fileType":"ALL","ctrlFilename":"imp_s_ecif_ecif_cert_info.ctl"},{"tblName":"ECIF_ECIF_CUSTMAST","filenameRule":"s_ecif_ecif_custmast","lastImportDate":1536804052000,"fileDate":"20180831","isAutoUpdate":"0","isActive":"1","dataInterface":"2","fileType":"ALL","ctrlFilename":"imp_s_ecif_ecif_custmast.ctl"},{"tblName":"OFCR_CH_ACCT_MAST","filenameRule":"s_ofcr_ch_acct_mast","lastImportDate":1548991163000,"fileDate":"20190130","isAutoUpdate":"0","isActive":"1","dataInterface":"2","fileType":"ALL","ctrlFilename":"imp_s_ofcr_ch_acct_mast.ctl"},{"tblName":"OFCR_CI_CUSTMAST","filenameRule":"s_ofcr_ci_custmast","lastImportDate":1548991136000,"fileDate":"20190130","isAutoUpdate":"0","isActive":"1","dataInterface":"2","fileType":"ALL","ctrlFilename":"imp_s_ofcr_ci_custmast.ctl"},{"tblName":"OFCR_GLM_ACCT_MAST","filenameRule":"s_ofcr_glm_acct_mast","lastImportDate":1536804327000,"fileDate":"20180831","isAutoUpdate":"0","isActive":"1","dataInterface":"2","fileType":"ALL","ctrlFilename":"imp_s_ofcr_glm_acct_mast.ctl"},{"tblName":"OFCR_LN_ACCT_BALANCES","filenameRule":"s_ofcr_ln_acct_balances","lastImportDate":1536804334000,"fileDate":"20180831","isAutoUpdate":"0","isActive":"1","dataInterface":"2","fileType":"ALL","ctrlFilename":"imp_s_ofcr_ln_acct_balances.ctl"},{"tblName":"OFCR_LN_ACCT_DTLS","filenameRule":"s_ofcr_ln_acct_dtls","lastImportDate":1536804347000,"fileDate":"20180831","isAutoUpdate":"0","isActive":"1","dataInterface":"2","fileType":"ALL","ctrlFilename":"imp_s_ofcr_ln_acct_dtls.ctl"},{"tblName":"OFCR_MC_ACCT_XREF","filenameRule":"s_ofcr_mc_acct_xref","lastImportDate":1548990875000,"fileDate":"20190130","isAutoUpdate":"0","isActive":"1","dataInterface":"2","fileType":"ALL","ctrlFilename":"imp_s_ofcr_mc_acct_xref.ctl"},{"tblName":"OFCR_TD_ACCT_MAST","filenameRule":"s_ofcr_td_acct_mast","lastImportDate":1548990804000,"fileDate":"20190130","isAutoUpdate":"0","isActive":"1","dataInterface":"2","fileType":"ALL","ctrlFilename":"imp_s_ofcr_td_acct_mast.ctl"},{"tblName":"OFCR_TD_DEP_MAST","filenameRule":"s_ofcr_td_dep_mast","lastImportDate":1548990868000,"fileDate":"20190130","isAutoUpdate":"0","isActive":"1","dataInterface":"2","fileType":"ALL","ctrlFilename":"imp_s_ofcr_td_dep_mast.ctl"},{"tblName":"OFCR_TF_MDM_AC_REL","filenameRule":"s_ofcr_tf_mdm_ac_rel","lastImportDate":1548990972000,"fileDate":"20190130","isAutoUpdate":"0","isActive":"1","dataInterface":"2","fileType":"ALL","ctrlFilename":"imp_s_ofcr_tf_mdm_ac_rel.ctl"},{"tblName":"OFCR_TF_MDM_FCRAC_REL","filenameRule":"s_ofcr_tf_mdm_fcrac_rel","lastImportDate":1548990909000,"fileDate":"20190130","isAutoUpdate":"0","isActive":"1","dataInterface":"2","fileType":"ALL","ctrlFilename":"imp_s_ofcr_tf_mdm_fcrac_rel.ctl"},{"tblName":"OFCR_TF_MDM_STTL_TYPE","filenameRule":"s_ofcr_tf_mdm_sttl_type","lastImportDate":1536804673000,"fileDate":"20180831","isAutoUpdate":"0","isActive":"1","dataInterface":"2","fileType":"ALL","ctrlFilename":"imp_s_ofcr_tf_mdm_sttl_type.ctl"},{"tblName":"OFCR_LN_ACCT_INT_BALANCE_DTLS","filenameRule":"s_ofcr_ln_acct_int_balance_dtls","lastImportDate":1536804380000,"fileDate":"20180831","isAutoUpdate":"1","isActive":"1","dataInterface":"2","fileType":"ALL","ctrlFilename":"imp_s_ofcr_ln_acct_int_balance_dtls.ctl"},{"tblName":"OFCR_CH_INT_RATE_TIER_PLAN","filenameRule":"s_ofcr_ch_int_rate_tier_plan","lastImportDate":1536804175000,"fileDate":"20180831","isAutoUpdate":"1","isActive":"1","dataInterface":"2","fileType":"ALL","ctrlFilename":"imp_s_ofcr_ch_int_rate_tier_plan.ctl"},{"tblName":"OFCR_BA_HOLD_FUNDS","filenameRule":"s_ofcr_ba_hold_funds","lastImportDate":1536804053000,"fileDate":"20180831","isAutoUpdate":"1","isActive":"1","dataInterface":"2","fileType":"ALL","ctrlFilename":"imp_s_ofcr_ba_hold_funds.ctl"},{"tblName":"OFCR_BA_EXT_BRANCH_XREF","filenameRule":"s_ofcr_ba_ext_branch_xref","lastImportDate":1548638155000,"fileDate":"20181231","isAutoUpdate":"1","isActive":"1","dataInterface":"2","fileType":"ALL","ctrlFilename":"imp_s_ofcr_ba_ext_branch_xref.ctl"},{"tblName":"OFCR_TF_WRAPPER_MESSAGE","filenameRule":"s_ofcr_tf_wrapper_message","lastImportDate":1536804676000,"fileDate":"20180831","isAutoUpdate":"1","isActive":"1","dataInterface":"2","fileType":"ALL","ctrlFilename":"imp_s_ofcr_tf_wrapper_message.ctl"},{"tblName":"OFCR_LN_MAT_EXT_INSTR","filenameRule":"s_ofcr_ln_mat_ext_instr","lastImportDate":1536804383000,"fileDate":"20180831","isAutoUpdate":"1","isActive":"1","dataInterface":"2","fileType":"ALL","ctrlFilename":"imp_s_ofcr_ln_mat_ext_instr.ctl"},{"tblName":"OFCR_TF_BRN_CLEARING_XREF","filenameRule":"s_ofcr_tf_brn_clearing_xref","lastImportDate":1536804535000,"fileDate":"20180831","isAutoUpdate":"1","isActive":"1","dataInterface":"2","fileType":"ALL","ctrlFilename":"imp_s_ofcr_tf_brn_clearing_xref.ctl"},{"tblName":"OFCR_GLM_COM_ITEM","filenameRule":"s_ofcr_glm_com_item","lastImportDate":1536804327000,"fileDate":"20180831","isAutoUpdate":"1","isActive":"1","dataInterface":"2","fileType":"ALL","ctrlFilename":"imp_s_ofcr_glm_com_item.ctl"},{"tblName":"OFCR_BA_INT_INDX_RATE","filenameRule":"s_ofcr_ba_int_indx_rate","lastImportDate":1536804054000,"fileDate":"20180831","isAutoUpdate":"1","isActive":"1","dataInterface":"2","fileType":"ALL","ctrlFilename":"imp_s_ofcr_ba_int_indx_rate.ctl"},{"tblName":"OFCR_CH_PROD_MAST","filenameRule":"s_ofcr_ch_prod_mast","lastImportDate":1548413096000,"fileDate":"20181231","isAutoUpdate":"1","isActive":"1","dataInterface":"2","fileType":"ALL","ctrlFilename":"imp_s_ofcr_ch_prod_mast.ctl"},{"tblName":"OFCR_SM_USER_PROFILE","filenameRule":"s_ofcr_sm_user_profile","lastImportDate":1536804455000,"fileDate":"20180831","isAutoUpdate":"1","isActive":"1","dataInterface":"2","fileType":"ALL","ctrlFilename":"imp_s_ofcr_sm_user_profile.ctl"},{"tblName":"OFCR_LN_PROD_INT_ATTR","filenameRule":"s_ofcr_ln_prod_int_attr","lastImportDate":1536804383000,"fileDate":"20180831","isAutoUpdate":"1","isActive":"1","dataInterface":"2","fileType":"ALL","ctrlFilename":"imp_s_ofcr_ln_prod_int_attr.ctl"},{"tblName":"OFCR_GLM_PROD_MAST","filenameRule":"s_ofcr_glm_prod_mast","lastImportDate":1536804327000,"fileDate":"20180831","isAutoUpdate":"1","isActive":"1","dataInterface":"2","fileType":"ALL","ctrlFilename":"imp_s_ofcr_glm_prod_mast.ctl"},{"tblName":"OFCR_TF_FORCE_DEDUCTION","filenameRule":"s_ofcr_tf_force_deduction","lastImportDate":1536804537000,"fileDate":"20180831","isAutoUpdate":"1","isActive":"1","dataInterface":"2","fileType":"ALL","ctrlFilename":"imp_s_ofcr_tf_force_deduction.ctl"},{"tblName":"OFCR_TF_INDV_DEPO_AGMT_INF","filenameRule":"s_ofcr_tf_indv_depo_agmt_inf","lastImportDate":1536804537000,"fileDate":"20180831","isAutoUpdate":"1","isActive":"1","dataInterface":"2","fileType":"ALL","ctrlFilename":"imp_s_ofcr_tf_indv_depo_agmt_inf.ctl"},{"tblName":"OFCR_TD_PROD_MAST","filenameRule":"s_ofcr_td_prod_mast","lastImportDate":1536804480000,"fileDate":"20180831","isAutoUpdate":"1","isActive":"1","dataInterface":"2","fileType":"ALL","ctrlFilename":"imp_s_ofcr_td_prod_mast.ctl"},{"tblName":"OFCR_LN_PROD_MAST","filenameRule":"s_ofcr_ln_prod_mast","lastImportDate":1536804383000,"fileDate":"20180831","isAutoUpdate":"1","isActive":"1","dataInterface":"2","fileType":"ALL","ctrlFilename":"imp_s_ofcr_ln_prod_mast.ctl"},{"tblName":"OFCR_CH_SWEEP_OUT","filenameRule":"s_ofcr_ch_sweep_out_all","lastImportDate":1536804175000,"fileDate":"20180831","isAutoUpdate":"1","isActive":"1","dataInterface":"2","fileType":"ALL","ctrlFilename":"imp_s_ofcr_ch_sweep_out.ctl"},{"tblName":"OFCR_MC_PKG_MAST","filenameRule":"s_ofcr_mc_pkg_mast","lastImportDate":1536804455000,"fileDate":"20180831","isAutoUpdate":"1","isActive":"1","dataInterface":"2","fileType":"ALL","ctrlFilename":"imp_s_ofcr_mc_pkg_mast.ctl"},{"tblName":"OFCR_TF_HOLD_AMT","filenameRule":"s_ofcr_tf_hold_amt","lastImportDate":1536804537000,"fileDate":"20180831","isAutoUpdate":"1","isActive":"1","dataInterface":"2","fileType":"ALL","ctrlFilename":"imp_s_ofcr_tf_hold_amt.ctl"},{"tblName":"OFCR_TF_CHANNEL_CONSTANT","filenameRule":"s_ofcr_tf_channel_constant","lastImportDate":1536804535000,"fileDate":"20180831","isAutoUpdate":"1","isActive":"1","dataInterface":"2","fileType":"ALL","ctrlFilename":"imp_s_ofcr_tf_channel_constant.ctl"},{"tblName":"OFCR_TF_INVENTORY_ATTRIBUTE","filenameRule":"s_ofcr_tf_inventory_attribute","lastImportDate":1536804537000,"fileDate":"20180831","isAutoUpdate":"1","isActive":"1","dataInterface":"2","fileType":"ALL","ctrlFilename":"imp_s_ofcr_tf_inventory_attribute.ctl"},{"tblName":"OFCR_TF_CIF_STOCK_HOLDER_INF","filenameRule":"s_ofcr_tf_cif_stock_holder_inf","lastImportDate":1536804536000,"fileDate":"20180831","isAutoUpdate":"0","isActive":"1","dataInterface":"2","fileType":"ALL","ctrlFilename":"imp_s_ofcr_tf_cif_stock_holder_inf.ctl"},{"tblName":"OFCR_CI_CUST_TYPES","filenameRule":"s_ofcr_ci_cust_types","lastImportDate":1536804326000,"fileDate":"20180831","isAutoUpdate":"0","isActive":"1","dataInterface":"2","fileType":"ALL","ctrlFilename":"imp_s_ofcr_ci_cust_types.ctl"},{"tblName":"ATMP_DEVINFO","filenameRule":"s_atmp_devinfo","lastImportDate":1537173973000,"fileDate":"20180831","isAutoUpdate":"0","isActive":"1","dataInterface":"2","fileType":"ALL","ctrlFilename":"imp_s_atmp_devinfo.ctl"},{"tblName":"ATMP_T_DEVICE","filenameRule":"s_atmp_t_device","lastImportDate":1537175033000,"fileDate":"20180831","isAutoUpdate":"0","isActive":"1","dataInterface":"2","fileType":"ALL","ctrlFilename":"imp_s_atmp_t_device.ctl"},{"tblName":"ATMP_T_DEVICESTATE","filenameRule":"s_atmp_t_devicestate","lastImportDate":1537176887000,"fileDate":"20180831","isAutoUpdate":"0","isActive":"1","dataInterface":"2","fileType":"ALL","ctrlFilename":"imp_s_atmp_t_devicestate.ctl"},{"tblName":"OFCR_XF_STCAP_GL_TXNS_MMDD","filenameRule":"s_ofcr_xf_stcap_gl_txns_mmdd","lastImportDate":1539157639000,"fileDate":"20180831","isAutoUpdate":"0","isActive":"1","dataInterface":"2","fileType":"ADD","ctrlFilename":"imp_s_ofcr_xf_stcap_gl_txns_mmdd.ctl"},{"tblName":"OFCR_TD_ACCT_MAST_M","filenameRule":"s_ofcr_td_acct_mast","lastImportDate":1547708457000,"fileDate":"20181231","isAutoUpdate":"0","isActive":"1","dataInterface":"2","fileType":"ALL","ctrlFilename":"month\\\\imp_s_ofcr_td_acct_mast_m.ctl"},{"tblName":"OFCR_TF_MDM_FCRAC_REL_M","filenameRule":"s_ofcr_tf_mdm_fcrac_rel","lastImportDate":1547708514000,"fileDate":"20181231","isAutoUpdate":"0","isActive":"1","dataInterface":"2","fileType":"ALL","ctrlFilename":"month\\\\imp_s_ofcr_tf_mdm_fcrac_rel_m.ctl"},{"tblName":"OFCR_TF_MDM_AC_REL_M","filenameRule":"s_ofcr_tf_mdm_ac_rel","lastImportDate":1547708553000,"fileDate":"20181231","isAutoUpdate":"0","isActive":"1","dataInterface":"2","fileType":"ALL","ctrlFilename":"month\\\\imp_s_ofcr_tf_mdm_ac_rel_m.ctl"},{"tblName":"OFCR_TD_DEP_MAST_M","filenameRule":"s_ofcr_td_dep_mast","lastImportDate":1547708511000,"fileDate":"20181231","isAutoUpdate":"0","isActive":"1","dataInterface":"2","fileType":"ALL","ctrlFilename":"month\\\\imp_s_ofcr_td_dep_mast_m.ctl"},{"tblName":"OFCR_MC_ACCT_XREF_M","filenameRule":"s_ofcr_mc_acct_xref","lastImportDate":1547708499000,"fileDate":"20181231","isAutoUpdate":"0","isActive":"1","dataInterface":"2","fileType":"ALL","ctrlFilename":"month\\\\imp_s_ofcr_mc_acct_xref_m.ctl"},{"tblName":"OFCR_CI_CUSTMAST_M","filenameRule":"s_ofcr_ci_custmast","lastImportDate":1548045740000,"fileDate":"20181231","isAutoUpdate":"0","isActive":"1","dataInterface":"2","fileType":"ALL","ctrlFilename":"month\\\\imp_s_ofcr_ci_custmast_m.ctl"},{"tblName":"OFCR_CI_CUSTMAST_M","filenameRule":"^ofcr_ci_custmast","lastImportDate":1548045740000,"fileDate":"20181231","isAutoUpdate":"0","isActive":"1","dataInterface":"1","fileType":"ALL","ctrlFilename":"month\\\\imp_ofcr_ci_custmast_m.ctl"},{"tblName":"OFCR_TF_MDM_AC_REL_M","filenameRule":"^ofcr_tf_mdm_ac_rel","lastImportDate":1547708553000,"fileDate":"20181231","isAutoUpdate":"0","isActive":"1","dataInterface":"1","fileType":"ALL","ctrlFilename":"month\\\\imp_ofcr_tf_mdm_ac_rel_m.ctl"},{"tblName":"OFCR_TF_MDM_FCRAC_REL_M","filenameRule":"^ofcr_tf_mdm_fcrac_rel","lastImportDate":1547708514000,"fileDate":"20181231","isAutoUpdate":"0","isActive":"1","dataInterface":"1","fileType":"ALL","ctrlFilename":"month\\\\imp_ofcr_tf_mdm_fcrac_rel_m.ctl"},{"tblName":"OFCR_TD_DEP_MAST_M","filenameRule":"^ofcr_td_dep_mast","lastImportDate":1547708511000,"fileDate":"20181231","isAutoUpdate":"0","isActive":"1","dataInterface":"1","fileType":"ALL","ctrlFilename":"month\\\\imp_ofcr_td_dep_mast_m.ctl"},{"tblName":"OFCR_TD_ACCT_MAST_M","filenameRule":"^ofcr_td_acct_mast","lastImportDate":1547708457000,"fileDate":"20181231","isAutoUpdate":"0","isActive":"1","dataInterface":"1","fileType":"ALL","ctrlFilename":"month\\\\imp_ofcr_td_acct_mast_m.ctl"},{"tblName":"OFCR_CH_ACCT_MAST_M","filenameRule":"^ofcr_ch_acct_mast","lastImportDate":1547708653000,"fileDate":"20181231","isAutoUpdate":"0","isActive":"1","dataInterface":"1","fileType":"ALL","ctrlFilename":"month\\\\imp_ofcr_ch_acct_mast_m.ctl"},{"tblName":"OFCR_MC_ACCT_XREF_M","filenameRule":"^ofcr_mc_acct_xref","lastImportDate":1547708499000,"fileDate":"20181231","isAutoUpdate":"0","isActive":"1","dataInterface":"1","fileType":"ALL","ctrlFilename":"month\\\\imp_ofcr_mc_acct_xref_m.ctl"}]}')
});

var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("应用实例，访问地址为 http://%s:%s", host, port);
});


