function ShowVideo(props) {
  videos.map(function(item) {
    return (
      <div key={item.id.toString()}>
          <h2>{item.title}</h2>
          <div>
            <video src={item.url}></video>
          </div>
          <p>{item.description}</p>
          <p>{item.tags}</p>
      </div>
    );
  }
)};

const idIfication = {
  date : new Date(),
  idNew() {
    return `${this.date.getFullYear()}${this.date.getMonth()}${this.date.getDate()}${this.date.getHours()}${this.date.getMinutes()}${this.date.getSeconds()}`;
  },
};

const mainHead = `ВИДЕОНОВОСТИ ДНЯ, сегодня ${new Date().toLocaleString()}`;

const videos = [
  {
    id: idIfication.idNew() + 1,
    title: 'Video in Instagram',
    url: 'https://www.instagram.com/p/CMHIjU4INFQ/?utm_source=ig_web_button_share_sheet',
    tags: '',
    description: 'Снова снег, зима агонизирует, хочется весны,тепла,молодой зелени,когда листочки только появляются, а тут плач царевны',
  },
  {
    id: idIfication.idNew() + 2,
    title: 'Video in VK',
    url: 'https://vk.com/video-87085668_456240135',
    tags: '',
    description: '"Ключи Твери": история бывшей казенной палаты. В новом выпуске программы экскурсовод Вероника Эстер рассказала о здании бывшего губернского правления и казённой палаты. На Советской оно появилось в 18 веке по проекту архитектора Федора Штенгеля.',
  },
  {
    id: idIfication.idNew() + 3,
    title: 'Video in Youtube',
    url: 'https://www.youtube.com/watch?v=fGHgXVfvFjA',
    tags: '',
    description: 'Раньше я покупал краны от фильтра для воды, когда они начинали течь, но потом узнал способ как их починить. Делюсь  с вами друзья!',
  },
  {
    id: idIfication.idNew() + 4,
    title: 'Video on Facebook',
    url: 'https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fmvd.official%2Fvideos%2F905976890181365%2F&show_text=false&width=560',
    tags: '',
    description: 'Сегодня в рубрике #ПредупреждёнЗначитВооружён продолжаем разговор о телефонных мошенничествах. Несмотря на регулярную профилактическую работу, граждане продолжают доверять неизвестным лицам и непроверенной информации. Так, на этой неделе внимание инспектора отдела по делам несовершеннолетних ОМВД России по Ярославскому району Екатерины Шараповой привлекла женщина, которая находилась у банкомата и разговаривала по телефону, намереваясь перевести денежные средства.',
  },
];

function App() {
  return (
    <div>
      <h1>{mainHead}</h1>
      <div>
        <ShowVideo />
      </div>
    </div>
  )
}

export default App;
