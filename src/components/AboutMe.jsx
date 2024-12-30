import React from "react";

const AboutMe = () => {
  return (
    <section style={{ backgroundColor: "#140524", color: "#fff", padding: "20px 60px 60px 60px", borderRadius: "10px", margin: "125px 0" }}>
      <h2 style={{ textAlign: "center", color: "#8b1596" }}>Hakkımda</h2>
      <p style={{ fontSize: "16px", lineHeight: "1.6", textAlign: "justify" }}>
        Merhaba! Ben Emad, yazılım geliştirme ve teknolojiye tutkulu bir bireyim. Problem çözme, öğrenme ve yeni teknolojilerle çalışma benim için hem bir kariyer hem de bir yaşam tarzı. Özellikle Web geliştirme, yapay zeka alanlarında çalışmayı seviyorum.
      </p>
      <h3 style={{ color: "#8b1596" }}>Becerilerim</h3>
      <ul style={{ lineHeight: "1.8" }}>
        <li>Programlama Dilleri: Python, JavaScript</li>
        <li>Frameworkler: React, NodeJs </li>
        <li>Veritabanları: PostgreSQL, MongoDB</li>
        <li>Diğer: Git, API geliştirme</li>
      </ul>
      <h3 style={{ color: "#8b1596" }}>Hobilerim</h3>
      <p style={{ fontSize: "16px", lineHeight: "1.6", textAlign: "justify" }}>
        Boş zamanlarımda kod yazmak, spor yapmak, seyahat etmek yapmayı seviyorum. Ayrıca yeni teknolojileri öğrenmek ve bu bilgilerle projeler üretmek benim için keyifli bir uğraş.
      </p>
      <h3 style={{ color: "#8b1596" }}>İletişim</h3>
      <p style={{ fontSize: "16px", lineHeight: "1.6", textAlign: "justify" }}>
        Bana ulaşmak isterseniz, lütfen <a href="mailto:emad.walidc@gmail.com" style={{ color: "#e4a033", textDecoration: "none" }}>emad.walidc@gmail.com</a> adresine mail gönderin.
      </p>
    </section>
  );
};

export default AboutMe;
