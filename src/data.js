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
name = input('adınız: ')
kg = float(input('kilonuz: '))
hg = float(input('boyunuz: '))

index = (kg) / (hg ** 2)

if (index >= 0) and (index<=18.4):
   print(f'{name} kilo indeksin: {index} ve kilo değerlendirmen zayıf.')
elif (index>18.4) and (index<=24.9):
   print(f'{name} kilo indeksin: {index} ve kilo değerlendirmen normal.')
elif (index>24.9) and (index<=29.9):
   print(f'{name} kilo indeksin: {index} ve kilo değerlendirmen kilolu.')
elif (index>=29.9) and (index<=45.9):
   print(f'{name} kilo indeksin: {index} ve kilo değerlendirmen obez.')
else:
   print('bilgileriniz yanlış.')`,
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
};