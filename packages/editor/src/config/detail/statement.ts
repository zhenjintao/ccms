import { FieldConfigs } from "ccms/dist/src/components/formFields";

const config: FieldConfigs[] = [
  {
    "field": "statement.statement",
    "label": "模板字符串",
    "type": "text"
  },
  {
    "label": "参数",
    "field": "statement.params",
    "type": "form",
    "primaryField": "field",
    "fields": [
      {
        "label": "字段名",
        "field": "field",
        "type": "text"
      },
      {
        "label": "数据来源",
        "field": "data",
        "type": "import_subform",
        "interface": {
          "url": "${configDomain}/common/ParamConfig.json",
          "urlParams": [
            {
              "field": "version",
              "data": {
                "source": "source",
                "field": "version"
              }
            },
            {
              "field": "configDomain",
              "data": {
                "source": "source",
                "field": "configDomain"
              }
            }
          ],
          "method": 'GET',
          "cache": {
            "global": "CCMS_CONFIG_common_ParamConfig"
          }
        }
      }
    ],
    "canInsert": true,
    "canRemove": true,
    "canCollapse": true,
    "canSort": true
  }
]

export default config