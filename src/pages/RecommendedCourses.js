import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import './RecommendedCourses.css';

function RecommendedCourses() {
  const location = useLocation();
  const { score } = location.state || { score: 0 }; // スコアの取得

  const renderContentBasedOnScore = (score) => {
    if (score >= 0 && score <= 20) {
      return <div>レベル 1 のコースを表示</div>;
    } else if (score > 20 && score <= 40) {
      return <div>レベル 2 のコースを表示</div>;
    } else if (score > 40 && score <= 60) {
      return <div>レベル 3 のコースを表示</div>;
    } else if (score > 60 && score <= 80) {
      return <div>レベル 4 のコースを表示</div>;
    } else if (score > 80 && score <= 100) {
      return <div>レベル 5 のコースを表示</div>;
    }
    return <div>適切なコースが見つかりませんでした。</div>;
  };

  return (
    <>
      <Header />
      <div className="recommended-courses-container">
        <h2>おすすめのコース</h2>
        {renderContentBasedOnScore(score)}
      </div>
    </>
  );
}

export default RecommendedCourses;
