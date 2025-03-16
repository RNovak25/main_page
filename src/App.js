import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

const cars = [
  { id: 1, name: "Tesla Model S", image: "/images/tesla.jpg", description: "Tesla Model S – это премиальный электрический седан, выпускаемый с 2012 года. Он сочетает современный дизайн, передовые технологии и высокую производительность, став одним из самых узнаваемых электромобилей в мире. Model S отличается просторным салоном, минималистичным интерьером и инновационной системой автопилота. Этот автомобиль олицетворяет будущее электрического транспорта, предлагая комфорт и экологичность без компромиссов." },
  { id: 2, name: "BMW M3", image: "/images/BMW M3 Competition.jpg", description: "BMW M3 — это высокопроизводительная версия 3-й серии, разрабатываемая подразделением BMW M. Впервые представленная в 1986 году, M3 стала культовой моделью благодаря сочетанию мощности, точной управляемости и спортивного стиля. Автомобиль выпускается в кузовах седан, купе и кабриолет, предлагая динамику, вдохновлённую автоспортом. M3 остается эталоном среди спортивных автомобилей, привлекая энтузиастов драйва по всему миру." },
  { id: 3, name: "Audi R8", image: "/images/Audi R8.jpg", description: "Audi R8 — это флагманский спортивный автомобиль, выпускаемый с 2006 года. Он сочетает в себе агрессивный дизайн, передовые технологии и мощный двигатель, расположенный центрально, что обеспечивает отличную управляемость. Разработанный с участием гоночных технологий Audi, R8 предлагает динамику суперкара в сочетании с комфортом для повседневного использования. Этот автомобиль стал символом инженерного мастерства Audi и одним из самых знаковых суперкаров современности." },
  { id: 4, name: "Mercedes-Benz AMG GT", image: "/images/AMG GT 63.jpg", description: "Mercedes-Benz AMG GT — это спортивный автомобиль, разработанный подразделением Mercedes-AMG и выпускаемый с 2015 года. Он отличается агрессивным дизайном, длинным капотом и низкой посадкой, олицетворяя дух классических гран-туреров. AMG GT сочетает передовые технологии, высокую динамику и премиальный уровень комфорта, делая его конкурентом таким моделям, как Porsche 911. Этот автомобиль символизирует мощь и спортивный характер Mercedes-AMG." },
  { id: 5, name: "Porsche 911", image: "/images/Porsche 911.jpg", description: "Porsche 911 — легендарный спортивный автомобиль, выпускаемый с 1964 года. Он отличается узнаваемым дизайном с заднемоторной компоновкой и непревзойденной управляемостью, став иконой среди спортивных машин. 911 сочетает в себе классические традиции Porsche с современными технологиями, предлагая высокую динамику и комфорт для повседневного вождения. Этот автомобиль остается символом инженерного совершенства и настоящего удовольствия от вождения." },
  { id: 6, name: "Lamborghini Huracan", image: "/images/lambo.jpg", description: "Lamborghini Huracán — это итальянский суперкар, выпускаемый с 2014 года в качестве преемника Gallardo. Он сочетает агрессивный дизайн, передовые технологии и мощный атмосферный двигатель, обеспечивающий впечатляющую динамику. Huracán доступен в различных модификациях, включая полноприводные и заднеприводные версии, а также трековые вариации. Этот автомобиль олицетворяет скорость, роскошь и экстремальные эмоции от вождения." },
  { id: 7, name: "BMW e34", image:"/images/BMW E34.jpg", description: "BMW E34 славится хорошей управляемостью, задним приводом и опциональной системой полного привода (в версии 525iX). До сих пор ценится среди автолюбителей за свой классический стиль и крепкую конструкцию."},
  { id: 8, name: "Chevrolet Camaro", image: "/images/Camaro.jpg", description: "Chevrolet Camaro – культовый американский маслкар, впервые представленный в 1966 году как конкурент Ford Mustang. За свою историю модель прошла несколько поколений, сохраняя агрессивный дизайн и мощные двигатели. Camaro предлагается в различных модификациях: от базовых версий с V6 до топовых моделей, таких как ZL1, оснащенных 6.2-литровым V8 с компрессором. Camaro славится своим ярким дизайном, спортивной управляемостью и мощностью, что делает его идеальным выбором для любителей драйва." },
  { id: 9, name: "Mercedes-Benz S-Class W140", image: "/images/Mercedes w140.jpg", description: "Mercedes-Benz W140 – это представительский седан флагманской S-класса, выпускавшийся с 1991 по 1999 год. Этот автомобиль стал символом роскоши, новаторских технологий и непревзойденного комфорта. W140 часто называют танком за его массивный и прочный кузов. Эта модель стала легендарной и до сих пор ценится любителями классических Mercedes за свою надежность, комфорт и статусность." },
  { id: 10, name: "Brabus G V12", image: "/images/Brabus.jpg", description: "Brabus – это немецкое тюнинг-ателье, специализирующееся на доработке автомобилей Mercedes-Benz. Компания известна созданием эксклюзивных, сверхмощных и роскошных моделей, оснащенных доработанными двигателями, агрессивным аэродинамическим обвесом и эксклюзивными интерьерами. Brabus выпускает как спортивные седаны и купе (на базе Mercedes-AMG), так и эксклюзивные внедорожники, такие как Brabus G63 900 Rocket с мощностью 900 л.с. Эти автомобили предназначены для тех, кто хочет максимальную производительность и премиальный стиль." }
];

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Главная</Link></li>
        <li><Link to="/models">Модели</Link></li>
        <li><Link to="/about">О нас</Link></li>
        <li><Link to="/contacts">Контакты</Link></li>
      </ul>
    </nav>
  );
}

function Home() {
  return (
    <div className="home-container">
      <section className="banner">
        <h1>Добро пожаловать в наш автосалон!</h1>
        <p>Лучшие автомобили по выгодным ценам</p>
        <a href="/models" className="btn">Смотреть каталог</a>
      </section>

      <section className="advantages">
        <h2>Почему выбирают нас?</h2>
        <div className="advantage-list">
          <div className="advantage-item">🚗 Большой выбор авто</div>
          <div className="advantage-item">💰 Выгодные цены</div>
          <div className="advantage-item">🔧 Гарантия и сервис</div>
          <div className="advantage-item">🏦 Кредит и рассрочка</div>
        </div>
      </section>

      <section className="reviews">
        <h2>Отзывы наших клиентов</h2>
        <div className="review">
          <p>«Купил у вас автомобиль, всё прошло отлично, спасибо!»</p>
          <span>⭐⭐⭐⭐⭐ – Алексей П.</span>
        </div>
        <div className="review">
          <p>«Очень доволен покупкой, оформили быстро и без проблем!»</p>
          <span>⭐⭐⭐⭐⭐ – Наталья Р.</span>
        </div>
      </section>
    </div>
  );
}

function Models() {
  const [selectedCar, setSelectedCar] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCars = cars.filter(car =>
    car.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Поиск по моделям..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <div className="car-list">
        {filteredCars.map((car) => (
          <div key={car.id} className="card" onClick={() => setSelectedCar(car)}>
            <img src={car.image} alt={car.name} className="car-image" />
            <h2>{car.name}</h2>
          </div>
        ))}
      </div>
      {selectedCar && (
        <div className="car-details">
          <div className="car-details-content">
            <h2>{selectedCar.name}</h2>
            <img src={selectedCar.image} alt={selectedCar.name} className="car-image-large" />
            <p>{selectedCar.description}</p>
            <button onClick={() => setSelectedCar(null)} className="button outline">Закрыть</button>
          </div>
        </div>
      )}
    </div>
  );
}

function Star({ selected, onClick }) {
  return (
    <span onClick={onClick} style={{ cursor: "pointer", color: selected ? "gold" : "gray", fontSize: "24px" }}>
      ★
    </span>
  );
}

function StarRating({ totalStars = 5 }) {
  const [starsSelected, setStarsSelected] = useState(0);
  return (
    <div className="rating">
      <h3>Оцените наш шоурум:</h3>
      {[...Array(totalStars)].map((_, i) => (
        <Star key={i} selected={i < starsSelected} onClick={() => setStarsSelected(i + 1)} />
      ))}
      <p>{starsSelected} из {totalStars} звезд</p>
    </div>
  );
}

function About() {
  return (
    <div className="about-container">
      <h2>О нас</h2>
      <p>
        Добро пожаловать в наш автомобильный шоурум! Мы специализируемся на продаже и подборе лучших автомобилей различных классов – от роскошных седанов до мощных суперкаров.
      </p>

      <h3>Почему выбирают нас?</h3>
      <ul>
        <li><strong>Большой выбор автомобилей</strong> – у нас только проверенные и надежные модели от ведущих брендов.</li>
        <li><strong>Качество и гарантия</strong> – каждый автомобиль проходит тщательную проверку.</li>
        <li><strong>Индивидуальный подход</strong> – наши эксперты помогут подобрать авто под ваши запросы.</li>
        <li><strong>Гибкие условия покупки</strong> – кредит, лизинг и программа обмена Trade-In.</li>
      </ul>

      <h3>Наша миссия</h3>
      <p>
        Мы стремимся сделать покупку автомобиля не просто сделкой, а настоящим удовольствием. Наша цель – предоставить клиентам только лучшие автомобили, высокий уровень сервиса и профессиональную консультацию.
      </p>

      <h3>Наши услуги</h3>
      <ul>
        <li>🚗 <strong>Продажа новых и б/у автомобилей</strong> – широкий ассортимент авто на любой вкус.</li>
        <li>🔧 <strong>Сервисное обслуживание</strong> – диагностика, технический осмотр и ремонт.</li>
        <li>📜 <strong>Оформление документов</strong> – регистрация, страховка и кредиты.</li>
        <li>💰 <strong>Выкуп и обмен авто</strong> – выгодные условия по Trade-In.</li>
      </ul>
      <StarRating />
    </div>
  );
}


function Contacts() { 
  return(
  <div className="contacts-container">
      <h2>Контакты</h2>
      <p><strong>📍 Адрес:</strong> г. [Алматы], ул. [Темирязева], 10</p>
      <p><strong>📞 Телефон:</strong> +7 (777) 123-45-67</p>
      <p><strong>📧 Email:</strong> carcompany@gmai;.com</p>
      <p><strong>🌐 Сайт:</strong> <a href="https://yourwebsite.com">yourwebsite.com</a></p>
      </div>
  );
}

export default function CarShowroom() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/models" element={<Models />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <footer className="footer">© 2025 Автомобильный шоурум | Все права защищены</footer>
      </div>
    </Router>
  );
}
