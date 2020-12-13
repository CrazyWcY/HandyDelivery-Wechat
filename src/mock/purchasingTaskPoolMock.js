import Mock from 'mockjs';
import mockjs from 'mockjs'
import SERVICE_URL from '../service/service'

let taskItems = Mock.mock({
  "list|5": [
    {
      "id|+1": 1,
      "title": "@title",
      "goods": "复旦大学纪念章",
      "pDestination": "复旦大学",
      "dDestination": "交通大学闵行校区",
      "pMondy": "@integer(100, 1000)",
      "deadline": "@datetime",
      "details": "求复旦纪念章。",
      "status": 0,
      "author": {
        "id": "wcy12321",
        "name": "胡博",
        "signature": "胡博yyds"
      }
    }
  ]
})

const purchasingTaskPoolMock = {
  'GET /api/getPurchasingTasks': taskItems
}

export default purchasingTaskPoolMock
