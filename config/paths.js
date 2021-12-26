const path = require('path')

module.exports = {
  // Kaynak dosyalar
  src: path.resolve(__dirname, '../src'),

  // Production dosyları
  build: path.resolve(__dirname, '../dist'),

  // Klasör oluşturmak için kopyalanan statik dosyalar 
  public: path.resolve(__dirname, '../public'),
}
