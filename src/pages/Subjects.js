import React from 'react';
import Card from '../components/Card';
import Header from '../components/Header';
import './subjects.css';

function Subjects() {
  const categories = {
      '人文学': [
      { title: '哲学', to: '/subjects/philosophy' },
      { title: '文学', to: '/subjects/literature' },
      { title: '言語学', to: '/subjects/linguistics' },
      { title: '史学', to: '/subjects/history' },
      { title: '人文地理学', to: '/subjects/human-geography' }
      // 他の人文学の科目
      ],
      '社会科学': [
      { title: '経済学', to: '/subjects/economics' },
      { title: '政治学', to: '/subjects/political-science' },
      { title: '社会学', to: '/subjects/sociology' },
      { title: '心理学', to: '/subjects/psychology' },
      { title: '教育学', to: '/subjects/education' }
      // 他の社会科学の科目
      ],
      '自然科学': [
          { title: '物理学', to: '/subjects/physics' },
          { title: '化学', to: '/subjects/chemistry' },
          { title: '生物学', to: '/subjects/biology' },
          { title: '天文学', to: '/subjects/astronomy' },
          { title: '地球科学', to: '/subjects/earth-science' }
          // 他の自然科学の科目
      ],
      '工学': [
          { title: '機械工学', to: '/subjects/mechanical-engineering'  },
          { title: '電気工学', to: '/subjects/electrical-engineering' },
          { title: '土木工学', to: '/subjects/civil-engineering' },
          { title: 'コンピュータ科学', to: '/subjects/computer-science' },
          { title: '化学工学', to: '/subjects/chemical-engineering' }
          // 他の工学の科目
      ],
      '医学・健康科学': [
          { title: '医学', to: '/subjects/medicine' },
          { title: '看護学', to: '/subjects/nursing' },
          { title: '薬学', to: '/subjects/pharmacy' },
          { title: '公衆衛生', to: '/subjects/public-health' },
          { title: '栄養学', to: '/subjects/nutrition' }
          // 他の医学・健康科学の科目
      ]
      // 他の分類とその科目を追加可能
    };
  const getBackgroundImage = (categoryName) => {
    const imageMap = {
      '人文学': '/images/humanities.jpg',
      '社会科学': '/images/social-sciences.jpg',
      '自然科学': '/images/natural-sciences.jpg',
      '工学': '/images/engineering.jpg',
      '医学・健康科学': '/images/medicine.jpg',
    };
    return imageMap[categoryName];
  };


  return (
    <div className="subjects-page">
      <Header />
      <h2 className="subjects-intro">興味のある専門分野を選んでください</h2>
      {Object.keys(categories).map((category) => (
        <div key={category} className="category-section">
          <h3>{category}</h3>
          <div className="card-container">
            {categories[category].map((subject, index) => (
              <Card
                key={index}
                title={subject.title}
                to={subject.to}
                image={getBackgroundImage(category)} // 背景画像のURLを設定
              />
            ))}
          </div>
        </div>
      ))}
      <footer className="subjects-footer">Contact us: info@example.com</footer>
    </div>
  );
}

export default Subjects;

