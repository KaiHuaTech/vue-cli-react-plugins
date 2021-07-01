## 快速开始
```shell
vue create -i '{"plugins":{"vue-cli-plugin-kaihua-clean-vue":{"version":"^0.0.32"},"vue-cli-plugin-kaihua-react":{"version":"^0.0.32","useIE8":true,"useAntd":true}}}' my-project
```
## 另一种开始方式 😊
首先保存下面的配置为 json 文件， 例如 `preset.json`
```json
{
  "plugins":{
    "vue-cli-plugin-kaihua-clean-vue":{
      "version":"^0.0.32"
    },
    "vue-cli-plugin-kaihua-react":{
      "version":"^0.0.32",
      "useIE8":true,
      "useAntd":true
    }
  }
}
```

然后执行 `vue create -p xxx/preset.json` (xxx 是 json 文件的相对/绝对路径)