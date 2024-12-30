import React from "react";

const AboutPython = () => {
  return (
    <section style={{ backgroundColor: "#140524", color: "#fff", padding: "20px 60px 60px 60px", borderRadius: "10px", margin: "60px 0" }}>
      <h2 style={{ textAlign: "center", color: "#8b1596", margin: "15px" }}>Python Nedir?</h2>
      <p style={{ fontSize: "16px", lineHeight: "1.6", textAlign: "justify" }}>
        Python, yüksek seviyeli, genel amaçlı bir programlama dilidir. Basit ve okunabilir bir söz dizimine sahip olması, programcılar arasında hızla popüler hale gelmesini sağlamıştır. 1991 yılında Guido van Rossum tarafından oluşturulan Python, günümüzde yazılım geliştirme, veri analitiği, yapay zeka, web geliştirme gibi birçok farklı alanda kullanılmaktadır. Python, kullanıcı dostu yapısıyla hem başlangıç seviyesindeki programcılar hem de profesyoneller için güçlü bir araçtır.
      </p>
      <h3 style={{ color: "#8b1596" }}>Python'un Kullanıldığı Alanlar</h3>
      <ul style={{ lineHeight: "1.8" }}>
        <li><strong>Web Geliştirme:</strong> Flask ve Django gibi popüler çerçevelerle dinamik web siteleri ve API'ler oluşturulabilir.</li>
        <li><strong>Veri Analitiği ve Bilim:</strong> NumPy, pandas, ve Matplotlib gibi kütüphaneler, veri analizi ve görselleştirme işlemlerini kolaylaştırır.</li>
        <li><strong>Yapay Zeka ve Makine Öğrenimi:</strong> TensorFlow, PyTorch gibi araçlar, derin öğrenme modellerinin geliştirilmesini destekler.</li>
        <li><strong>Oyun Geliştirme:</strong> PyGame gibi kütüphaneler, oyun geliştirme süreçlerinde kullanılır.</li>
        <li><strong>Sistem Otomasyonu:</strong> Script yazımı sayesinde sistem süreçlerini otomatikleştirmek mümkündür.</li>
      </ul>
      <h3 style={{ color: "#8b1596" }}>Neden Python Kullanmalıyız?</h3>
      <p style={{ fontSize: "16px", lineHeight: "1.6", textAlign: "justify" }}>
        Python'un sunduğu geniş kütüphane desteği, topluluk desteği ve kolay öğrenilebilir olması, onu programlama dilleri arasında öne çıkarır. Prototipleme sürecini hızlandırması ve çeşitli platformlarda sorunsuz çalışması da Python'un popülerliğini artırmaktadır.
      </p>
    </section>
  );
};

export default AboutPython;