# okuma öğreniyorum

### Nedir?

Bu proje, okuma-yazma bilmeyen çocuklara, harfleri tanımayı ve okumayı eğlenceli hale getirmeyi hedefleyen bir arttırılmış gerçeklik uygulamasıdır.

### Kullanım

Kullanıcı, önceden kartlara basılmış alfabe harflerini, telefonunun kamerasını kullanarak ekranda görüntüler. Telefon ekranında kameraya gösterilen harfle ilintili bir 3D model ve sesi belirir. Örn. "A" harfi gösterildiğinde, ekranda bir araba nesnesi ve araba sesi duyulur. Kullanıcı ekrandaki bu modele dokunuğunda, ilgili harfin nasıl okunduğu ile ilgili bir ses duyar.

### Kurulum

Projenin çalışabilmesi ve gerekli paketlerin yüklenebilmesi için NPM'ın yüklü olması gereklidir. 
Projeyi bilgisayarımıza indirdikten sonra terminal üzerinden proje doysa yoluna gidilerek, aşağıdaki komutu çalıştırın.

  ```sh
  npm install 
  ```
  
Gerekli dosyalar yüklendikten sonra projeyi "development" modunda ayağa kaldırmak için aşağıdaki komutu çalıştırın.

  ```sh
  npm run start
  ```
  
  * Web sayfası üzerinde telefon kamerasını kullanabilmek için SSL sertifikası bulunması gerekmektedir. 
  * Development modunda, local sunucu zaten "https" olarak otomatik yönlendirecektir.
