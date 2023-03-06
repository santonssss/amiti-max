import "./about.css";
import amet3x4 from "../../img/black.avif";
export default function About() {
  return (
    <div className="about">
      <div className="container">
        <div className="about-amet">
          <div className="amet-info-base">
            <h1 className="info-start">Биография</h1>
            <div className="p-base">
              <p className="info-p">
                <span className="nick">AMITI MAX</span> - настоящее имя Махсетов
                Аметбек Жакслыкович - русскоязычный исполнитель рэпа из
                Каракалпакстана, битмейкер. Музыкант получил широкую
                популярность в 2022 году, после выхода первого хиты «Мясо»,
                обогнавшей в iTunes-чарте диск Джастина Бибера и уступившей
                только новому альбому певицы Адель. В 2023 году <br />
                <span className="nick">AMITI MAX</span> стал обладателем
                «Реальной премии MusicBox» в категории «Вне формата», а журнал
                GQ назвал его «Открытием года». <br />
                <h2 className="info-h2">Дество</h2>
                Будущий топовый рэп-артист появился на свет 7 февраля 2005 года
                в Шимбае, расположенном недалеко от города Нукус
                (Каракалпакстан). <br />
                Отец был строгим и вспыльчивым, и часто на глазах у маленького
                сына доводил свою жену до слез. В итоге, по собственному
                признанию Адиля, он в детстве часто вслух желал ему смерти, но,
                повзрослев, об этом очень сожалел. Он отмечал, что именно от
                отца унаследовал любовь к музыке.
                <br />В школе Махсетов был активистом и примерным учеником. Он
                отлично рисовал, занимался баскетболом и дзюдо, играл в школьном
                театре. Но однажды он все же проявил свой бунтарский дух,
                явившись в школу наголо побритым. В 11 лет он «заболел»
                хип-хопом, увлекся творчеством Децла, затем – Эминема, 50 Cent,
                Snoop Dogg, Dr. Dre. К 15 годам он уже сочинял биты и начитывал
                на них свои тексты. Специального музыкального образования он не
                получил, но играл на гитаре и переслушал массу записей разных
                направлений – джаз, фолк, рок, фанк, соул. <br />
                Отец хотел, чтобы он выучился на архитектора. С этой целью его
                отправили в колледж Шимбая, где он осваивал специальность
                художника-мастера по дизайну.
                <h2 className="info-h2">Путь к успеху</h2>
                Впервые рэп-музыкант вышел на сцену в 16 лет. Это событие
                произошло во время городского фестиваля в Павлодаре. Публика
                осталась в восторге от его яркого и необычного выступления, и о
                нем заговорили как о талантливом самородке из глубинки. В 2009
                году молодой исполнитель со своим приятелем Ануаром Эриковичем
                (Niman) организовал музыкальный коллектив JILLZAY, куда кроме
                них вошли рэперы Strong Symphony, Six O, Truwer, Юрик Четверг.
                Они с успехом выступали по всем городам Казахстана и
                презентовали ряд хитовых синглов.
              </p>
            </div>
          </div>
          <div className="foto-ameta">
            <img src={amet3x4} alt="" className="foto-black" />
          </div>
        </div>
      </div>
    </div>
  );
}
