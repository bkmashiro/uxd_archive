'use strict';

/*
 * Load the model data of project 4.
 * We load into the property models.citiesModel a function that returns  an array of
 * strings with the names of several cities.
 *
 * See README.md for more details
 */

var models;

if (models === undefined) {
   models = {};
}

models.citiesModel = function() {
   return [
      'Nanjing', 
      'Shanghai', 
      'Tianjin', 
      'Beijing', 
      'Shijiazhuang',
      'Hefei', 
      'Chengdu', 
      'Shenzhen', 
      'Haikou', 
      'Guangzhou',
      'Xiamen', 
      'Xian', 
      'Anqing', 
      'Xuezhou', 
      'Suzhou',
      'Wuxi', 
      'Changzhou', 
      'Hangzhou', 
      'Taizhou',
      'Shenyang',
      'Ningbo',
      'Chongqing',
      'Dali',
      'Zhuhai',
      'Fuzhou'
   ];
};

