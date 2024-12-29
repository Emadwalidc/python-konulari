import componentsImg from './assets/components.png';
import propsImg from './assets/config.png';
import jsxImg from './assets/jsx-ui.png';
import stateImg from './assets/state-mgmt.png';

export const CORE_CONCEPTS = [
  {
    image: componentsImg,
    title: 'Koşul ifadeleri',
    description:
      'Pythonda koşul durumlar ile bir koşuldan elde ettiğimiz True ya da False değere göre programın farklı yönlerden ilerlemesini sağlayabiliriz.',
  },
  {
    image: jsxImg,
    title: 'Döngüler',
    description:
      'Yazılım geliştirmede belirli bir kod bloğunun tekrar tekrar çalıştırılmasını sağlayan temel bir programlama yapısıdır.',
  },
  {
    image: propsImg,
    title: 'Fonksiyonlar',
    description:
      'Fonksiyonlar adından anlaşılacağı gibi belli bir amacı gerçekleştirmek için oluşturulmuş yapılardır. Koda işlevsellik katmak için bunu sık sık kullanırız.',
  },
  {
    image: stateImg,
    title: 'OOP',
    description:
      'Nesne Yönelimli Programlama, her işlevin nesnel olarak soyutlandığı bir programlama şeklidir.',
  },
];

export const EXAMPLES = {
  Koşul_ifadeleri: {
    title: 'Koşul ifadeleri',
    description:
      'Python programlama dilinde koşullu durumları belirtmek için üç adet deyimden yararlanıyoruz: if elif else.',
    code: `
num = int(input('sayı: '))

if num > 0:
    print('sayı pozitif')
elif num < 0:
    print('sayı negatif')
else:
    print('sayı sıfır')`,
  },
  Döngüler: {
    title: 'Döngüler',
    description:
      'Pythonda kullanabileceğimiz 2 tane döngü tipi vardır. Bunlar; for ve while döngüleridir.',
    code: `
a = 1

while a < 10:
    a += 1
    print("bilgisayar yine çıldırdı!")
    
sayilar = [1,2,3,4,5]
for sayi in sayilar:
   print(sayi)`,
  },
  Fonksiyonlar: {
    title: 'Fonksiyonlar',
    description:
      'Yazdığımız bir python uygulamasındaki belli bir kod parçasını bir kaç yerde kullanma ihtiyacı duyduğumuzda fonksiyon oluşturmak işlerimizi kolaylaştırır.',
    code: `
def EmekliligeKacYilKaldi(dogumYili, isim):   
    yas = yasHesapla(dogumYili)
    emeklilik = 65 - yas
    if emeklilik > 0:
        print(f'emekliliğinize {emeklilik} yıl kaldı')
    else:
        print('Zaten emekli oldunuz')

EmekliligeKacYilKaldi(1983, 'Ali')
EmekliligeKacYilKaldi(1950, 'Ahmet')
EmekliligeKacYilKaldi(1974, 'Yağmur')`,
  },
  OOP: {
    title: 'OOP',
    description:
      `Sistemimizin birçok özelliği vardır. Bunları 4 temel özellikte inceleyebiliriz.

Soyutlama (Abstraction)
Kapsülleme (Encapsulation)
Miras Alma (Inheritance)
Çok Biçimlilik (Polymorphism).`,
    code: `
class Dog:
    species = "Canis familiaris"

    def __init__(self, name, age, breed):
        self.name = name
        self.age = age
        self.breed = breed

    def __str__(self):
        return f"{self.name} is {self.age} years old"

    def speak(self, sound):
        return f"{self.name} says {sound}"

>>> miles = Dog("Miles", 4, "Jack Russell Terrier")
>>> buddy = Dog("Buddy", 9, "Dachshund")
>>> jack = Dog("Jack", 3, "Bulldog")
>>> jim = Dog("Jim", 5, "Bulldog")

>>> buddy.speak("Yap")
'Buddy says Yap'

>>> jim.speak("Woof")
'Jim says Woof'

>>> jack.speak("Woof")
'Jack says Woof'`,
  },
  Listeler: {
    title: 'Listeler',
    description:
      'Pythonda listeler, birden fazla değeri bir arada saklamamıza olanak sağlar. Listeler sıralı ve değiştirilebilir veri yapılarıdır.',
    code: `
meyveler = ["elma", "muz", "çilek", "portakal"]

# Liste elemanlarını yazdırma
for meyve in meyveler:
    print(meyve)

# Yeni eleman ekleme
meyveler.append("kiraz")
print(meyveler)

# Eleman silme
meyveler.remove("çilek")
print(meyveler)

# Liste sıralama
meyveler.sort()
print(meyveler)`,
  },
  Sözlükler: {
    title: 'Sözlükler',
    description:
      'Sözlükler, anahtar-değer çiftlerini saklayan veri yapılarıdır. Anahtarlar benzersizdir ve her biri bir değere karşılık gelir.',
    code: `
telefonRehberi = {
    "Ali": "05321234567",
    "Ahmet": "05437654321",
    "Ayşe": "05559876543"
}

# Anahtara göre değer bulma
print(telefonRehberi["Ali"])

# Yeni bir anahtar-değer çifti ekleme
telefonRehberi["Mehmet"] = "05678901234"
print(telefonRehberi)

# Anahtarları ve değerleri listeleme
for isim, numara in telefonRehberi.items():
    print(f"{isim}: {numara}")`,
  },
  Dosyalar: {
    title: 'Dosyalar',
    description:
      'Dosya işlemleri ile dışardan veri okuyabilir veya programa veri yazabiliriz.',
    code: `
# Dosya oluşturma ve yazma
with open("deneme.txt", "w") as dosya:
    dosya.write("Merhaba, dünya!")

# Dosya okuma
with open("deneme.txt", "r") as dosya:
    veri = dosya.read()
    print(veri)`,
  },
  Hata_Yakalama: {
    title: 'Hata Yakalama',
    description:
      'Python programlarında hata durumlarını yönetmek için try-except bloklarını kullanabiliriz.',
    code: `
try:
    sayi = int(input("Bir sayı girin: "))
    sonuc = 10 / sayi
    print(sonuc)
except ZeroDivisionError:
    print("Sıfıra bölme hatası!")
except ValueError:
    print("Geçerli bir sayı girin!")
finally:
    print("İşlem tamamlandı.")`,
  },
  Setler: {
    title: 'Setler',
    description:
      'Setler, benzersiz elemanlardan oluşan sırasız veri yapılarıdır. Eleman tekrarı içermez.',
    code: `
meyveler = {"elma", "armut", "muz", "elma"}

# Benzersiz elemanlar
print(meyveler)

# Eleman ekleme
meyveler.add("çilek")
print(meyveler)

# Eleman silme
meyveler.remove("muz")
print(meyveler)`,
  },
  Zaman_Modülü: {
    title: 'Zaman Modülü',
    description:
      'Python\'da zaman ile ilgili işlemler yapmak için time ve datetime modülleri kullanılır.',
    code: `
import time
import datetime

# Şimdiki zamanı alma
simdi = datetime.datetime.now()
print("Şu anki zaman:", simdi)

# Uyutma
print("3 saniye bekliyorum...")
time.sleep(3)
print("Devam ediyoruz!")`,
  },
};
