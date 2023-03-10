# My Restaurant List ( AC 2-3 project )

使用 Node.js + Express 製作的簡易餐廳美食網站，可點擊餐廳卡片查看詳細資訊，也可透過名稱或料理類別來搜尋餐廳。

![image](https://user-images.githubusercontent.com/107454420/224214370-b16265b2-1338-4f29-abda-2a4c23361452.png)
![image](https://user-images.githubusercontent.com/107454420/224214757-ae255302-41b8-4b45-9073-d0d4ef42fb01.png)
![image](https://user-images.githubusercontent.com/107454420/224214717-02b81521-5acf-4f23-aab9-4d3bdc48c432.png)


## Features

1. 使用者可以點擊任一餐廳，查看更多餐廳資訊，如地址、電話與簡介
2. 使用者可以依店家名稱、料理類別來搜尋
3. 使用者可以瀏覽一家餐廳的詳細資訊
4. 使用者輸入的關鍵字無搜尋結果時，系統會自動推薦3間餐廳

## Prerequisites

* Node.js
* Express @4.16.4
* Express-handlebars @3.0.0

## Installation and Execution

1.開啟Terminal, Clone此專案至本機:
```
git clone https://github.com/kim1037/AC_my_restaurant_list.git
```

2.開啟終端機(Terminal)，進入存放此專案的資料夾
```
cd AC_my_restaurant_list
```

3.安裝 express
```
npm i express@4.16.4
```

4.安裝 handlebars
```
npm i express-handlebars@3.0.0
```

5.安裝nodemon (如已安裝可跳過此步驟)
```
npm install -g nodemon
```

6.啟動伺服器
```
npm run dev 
```

7.當 terminal 出現以下字樣，表示伺服器已啟動
```
Express is running on http://localhost:3000
```
