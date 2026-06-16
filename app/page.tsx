export default function Home() {
  const steps = [
    ["01", "現場を知る", "製品・人・モノ・情報の流れを理解し、表面的ではない課題を見つけます。", "people"],
    ["02", "課題を共有する", "お客様と同じ目線で、今困っていること、これから困りそうなことを整理します。", "puzzle"],
    ["03", "仕組みをつくる", "保管・組立・検査・梱包・出荷・配送を組み合わせ、最適な形にします。", "light"],
  ];

  const troubles = [
    "保管スペースが足りない",
    "出荷業務に時間を取られている",
    "組立・検査工程の人手が足りない",
    "展示会や販促活動の準備が負担になっている",
    "紙・FAX・手入力などの業務を見直したい",
  ];

  const flow = ["保管", "組立", "検査", "梱包", "出荷", "配送"];

  const solutions = [
    ["保管・在庫管理", "製品・部材・販促物などをお預かりし、出荷に合わせた管理を行います。"],
    ["製品組立・検査", "部材管理、組立、検査、品質確認など、製造支援にも対応します。"],
    ["流通加工・梱包", "検品、アソート、キッティング、ラベル貼付、セット組み、梱包作業に対応します。"],
    ["出荷代行・配送", "出荷作業からチャーター輸送、定期配送、納品代行までご相談いただけます。"],
    ["展示会・販促物流", "展示会資材、サンプル、販促物の保管・発送・搬入搬出を支援します。"],
    ["業務改善", "受発注、出荷事務、在庫管理など、物流周辺業務の改善も一緒に考えます。"],
  ];

  function Icon({ type }: { type: string }) {
    if (type === "people") return <span>👥</span>;
    if (type === "puzzle") return <span>🧩</span>;
    return <span>💡</span>;
  }

  return (
    <main>
      <section className="hero">
        <div className="heroShade" />
        <div className="container heroGrid">
          <div className="heroText">
            <p className="label">TOKIWA LOGISTICS / HIRAKATA</p>
            <h1>運ぶ前に、<br />考える。</h1>
            <p className="heroLead">物流を売るのではなく、<br />お客様の課題を解決する仕組みをつくる。</p>
            <p className="heroCopy">
              常盤運輸は、単なる運送会社・倉庫会社ではありません。お客様ごとに異なる課題に向き合い、現場を知り、課題を共有し、最適な物流の仕組みを共につくります。
            </p>
          </div>

          <div className="glass">
            <h2>こんなお困りごとはありませんか？</h2>
            {troubles.map((t) => (
              <div className="check" key={t}><span>✓</span>{t}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="section intro">
        <div className="container introGrid">
          <div>
            <p className="eyebrow">OUR PHILOSOPHY</p>
            <h2>決まったサービスを売り込むのではなく、<br />お客様に必要な答えを一緒に探します。</h2>
            <p>
              倉庫が必要なのか。流通加工が必要なのか。配送設計を見直すべきなのか。それとも、出荷事務や業務フローの改善が必要なのか。答えは、お客様の現場を知って初めて見えてきます。
            </p>
          </div>

          <div className="stepCards">
            {steps.map(([no, title, text, icon]) => (
              <article className="step" key={no}>
                <div className="icon"><Icon type={icon} /></div>
                <div className="no">{no}</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="why">
        <div className="container whyGrid">
          <div>
            <p className="eyebrow">WHY TOKIWA</p>
            <h2>スペック勝負でも、単価勝負でもない。</h2>
            <p>
              倉庫面積や作業単価だけでは、同業他社との差別化はできません。常盤運輸が目指すのは、お客様の業務全体を理解した上で、「どうすればもっと良くなるか」を一緒に考える課題解決型の物流です。
            </p>
          </div>
          <div className="quote">
            「何を売るか」ではなく、<br />「何に困っているのか」から始める。
            <small>それが、常盤運輸の考え方です。</small>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">ONE STOP SOLUTION</p>
          <h2>工程をつなぎ、全体最適で考える。</h2>
          <p className="lead">個別の作業だけでなく、前後工程まで見ながら最適な流れを設計します。</p>
          <div className="flow">
            {flow.map((f) => <div key={f}>{f}</div>)}
          </div>
        </div>
      </section>

      <section className="section bg">
        <div className="container">
          <p className="eyebrow">SOLUTION</p>
          <h2>課題に合わせて、必要な機能を組み合わせます。</h2>
          <p className="lead">
            下記はサービスメニューではなく、課題解決のための手段です。お客様の状況に合わせて、必要な部分だけ、または一貫対応でご提案します。
          </p>
          <div className="cards">
            {solutions.map(([title, text]) => (
              <article className="card" key={title}>
                <div className="photo">写真差替え枠</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="container darkGrid">
          <div>
            <p className="eyebrow white">BACK OFFICE IMPROVEMENT</p>
            <h2>物流の周辺業務にも、改善の余地があります。</h2>
            <p>
              受発注業務、出荷事務、在庫管理、帳票管理。物流の前後には、紙・FAX・手入力・情報の分散など、見えにくい負担が多くあります。常盤運輸では、現場と事務の両面から業務フローを見直し、デジタル活用の可能性もお客様と共に検討していきます。
            </p>
          </div>
          <div className="whiteCard">
            <h3>できることから、無理なく改善。</h3>
            <p>
              DXを目的にするのではなく、日々の業務を楽にすることを目的にします。現場に合わない仕組みではなく、運用できる改善を一緒に考えます。
            </p>
          </div>
        </div>
      </section>
<section className="section group">
  <div className="container groupGrid">
    <div className="groupText">
      <p className="eyebrow">FUTABA GROUP</p>
      <h2>双葉グループの総合力で、物流の枠を超える。</h2>
      <p>
        常盤運輸の物流・流通加工機能に加え、双葉グループのネットワークを活かすことで、展示会や販促活動に関する幅広いサポートも可能です。
      </p>

      <div className="groupItems">
        {[
          "ブースデザイン",
          "展示什器設計",
          "展示什器製作",
          "会場設営・施工",
          "搬入・搬出",
          "資材保管・管理",
        ].map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>
    </div>

    <div className="groupVisual">
      <div>FCG展示会写真<br />images/exhibition-booth.jpg</div>
      <div>什器・サイン写真<br />images/sign-fixture.jpg</div>
      <div>搬入出写真<br />images/carry-in.jpg</div>
      <div>保管・管理写真<br />images/storage.jpg</div>
    </div>
  </div>
</section>

      
      <section className="cta">
        <div className="container">
          <h2>物流のその先へ。</h2>
          <p>私たちは「何を売るか」ではなく、<br />「どうすればもっと良くなるか」をお客様と一緒に考える会社です。</p>
          <a href="/contact/">まずは相談する</a>
        </div>
      </section>

      <style>{`
        *{box-sizing:border-box}
        body{margin:0;font-family:-apple-system,BlinkMacSystemFont,"Yu Gothic","Meiryo",sans-serif;color:#10213d;line-height:1.8}
        .container{width:min(1180px,100%);margin:auto;padding:0 28px}
        .hero{position:relative;min-height:92vh;background:linear-gradient(120deg,#061f46,#0b65b9);overflow:hidden;color:white}
        .hero:before{content:"";position:absolute;inset:0;background:url('/images/main-visual.jpg') center/cover no-repeat;opacity:.42}
        .heroShade{position:absolute;inset:0;background:linear-gradient(90deg,rgba(2,20,50,.92),rgba(2,20,50,.42),rgba(2,20,50,.15))}
        .heroGrid{position:relative;z-index:1;min-height:92vh;display:grid;grid-template-columns:1.1fr .9fr;gap:52px;align-items:center}
        .label,.eyebrow{font-size:14px;font-weight:900;letter-spacing:.12em;color:#0b65b9}
        .hero .label{color:white;opacity:.9}
        h1{font-size:clamp(54px,8vw,104px);line-height:1.12;margin:18px 0 26px;font-weight:950;color:white}
        h2{font-size:clamp(32px,4.5vw,56px);line-height:1.22;margin:0 0 22px;color:#062b63}
        h3{margin:0;color:#062b63}
        p{margin:0}
        .heroLead{font-size:clamp(22px,3vw,34px);font-weight:900;line-height:1.45;margin-bottom:24px}
        .heroCopy{max-width:720px;font-weight:700;color:rgba(255,255,255,.9)}
        .glass{background:rgba(4,28,66,.72);border:1px solid rgba(255,255,255,.22);backdrop-filter:blur(18px);border-radius:24px;padding:30px;box-shadow:0 24px 70px rgba(0,0,0,.32)}
        .glass h2{color:white;font-size:24px;margin-bottom:20px}
        .check{display:flex;gap:14px;align-items:center;font-weight:850;padding:12px 0}
        .check span{width:28px;height:28px;border-radius:50%;background:white;color:#082f6d;display:grid;place-items:center;font-weight:950}
        .section{padding:92px 0}
        .introGrid{display:grid;grid-template-columns:.9fr 1.25fr;gap:48px;align-items:center}
        .intro p,.lead{color:#5a687a;font-weight:650}
        .stepCards{display:grid;grid-template-columns:repeat(3,1fr);gap:0}
        .step{position:relative;background:white;border:1px solid #e1e8f0;padding:34px 28px;min-height:280px;box-shadow:0 18px 42px rgba(10,35,75,.08);transition:.35s}
        .step:first-child{border-radius:24px 0 0 24px}
        .step:last-child{border-radius:0 24px 24px 0}
        .step:not(:last-child):after{content:"›";position:absolute;right:-13px;top:45%;z-index:2;font-size:48px;color:#9aacbf}
        .step:hover,.card:hover{transform:translateY(-8px);box-shadow:0 28px 58px rgba(10,35,75,.16)}
        .icon{width:74px;height:74px;border-radius:50%;background:linear-gradient(135deg,#062b63,#0b65b9);color:white;display:grid;place-items:center;font-size:34px;margin-bottom:18px}
        .no{position:absolute;top:44px;right:28px;color:#062b63;font-size:24px;font-weight:950}
        .step h3{font-size:24px;margin-bottom:12px}
        .step p{font-size:15px;color:#39485c;font-weight:650}
        .why{padding:70px 0;background:linear-gradient(180deg,#eaf5ff,#fff)}
        .whyGrid{display:grid;grid-template-columns:1fr 1.05fr;gap:46px;align-items:center}
        .why p{color:#35465d;font-weight:650}
        .quote{background:linear-gradient(135deg,#062b63,#003b91);color:white;border-radius:22px;padding:34px;font-size:30px;font-weight:950;line-height:1.55;box-shadow:0 24px 60px rgba(8,52,111,.25)}
        .quote small{display:block;margin-top:14px;font-size:15px;color:rgba(255,255,255,.78)}
        .flow{margin-top:34px;display:grid;grid-template-columns:repeat(6,1fr);gap:12px;background:#062b63;padding:26px;border-radius:26px}
        .flow div{min-height:104px;display:grid;place-items:center;color:white;background:rgba(255,255,255,.13);border-radius:16px;font-size:23px;font-weight:950}
        .bg{background:#f5f8fc}
        .cards{margin-top:34px;display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
        .card{background:white;border:1px solid #dfe8f2;border-radius:24px;overflow:hidden;box-shadow:0 18px 42px rgba(10,35,75,.08);transition:.35s}
        .photo{height:160px;display:grid;place-items:center;background:linear-gradient(135deg,rgba(6,43,99,.88),rgba(27,155,99,.64));color:white;font-weight:900}
        .card h3{font-size:23px;padding:24px 24px 8px}
        .card p{padding:0 24px 26px;color:#5a687a;font-weight:650}
        .dark{background:radial-gradient(circle at 15% 10%,rgba(27,155,99,.28),transparent 28%),linear-gradient(135deg,#061f46,#082f6d);color:white}
        .dark h2,.dark .white{color:white}
        .dark p{color:rgba(255,255,255,.82);font-weight:650}
        .darkGrid{display:grid;grid-template-columns:1fr .85fr;gap:46px;align-items:center}
        .whiteCard{background:white;color:#10213d;border-radius:26px;padding:34px;box-shadow:0 24px 70px rgba(0,0,0,.24)}
        .whiteCard p{color:#5a687a}
        .cta{padding:100px 0;text-align:center;background:linear-gradient(120deg,#061f46,#0b65b9);color:white}
        .cta h2{color:white;font-size:clamp(42px,6vw,72px)}
        .cta p{font-size:18px;font-weight:700;margin-bottom:28px}
        .cta a{display:inline-flex;padding:14px 34px;background:white;color:#062b63;border-radius:999px;font-weight:950;text-decoration:none}
        .group {
  background: #fff;
}

.groupGrid {
  display: grid;
  grid-template-columns: .95fr 1.05fr;
  gap: 48px;
  align-items: center;
}

.groupText {
  background: #f5f8fc;
  border: 1px solid #dfe8f2;
  border-radius: 28px;
  padding: 38px;
  box-shadow: 0 18px 42px rgba(10,35,75,.08);
}

.groupText p {
  color: #5a687a;
  font-weight: 650;
}

.groupItems {
  margin-top: 28px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.groupItems div {
  background: #fff;
  border: 1px solid #dfe8f2;
  border-radius: 999px;
  padding: 12px 16px;
  color: #062b63;
  font-weight: 900;
  text-align: center;
}

.groupVisual {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
}

.groupVisual div {
  min-height: 180px;
  display: grid;
  place-items: center;
  text-align: center;
  color: white;
  font-weight: 900;
  border-radius: 22px;
  background: linear-gradient(135deg, rgba(6,43,99,.86), rgba(11,101,185,.56)), #cbd5e1;
  box-shadow: 0 18px 42px rgba(10,35,75,.12);
  transition: .35s;
}

.groupVisual div:hover {
  transform: translateY(-8px);
  box-shadow: 0 28px 58px rgba(10,35,75,.18);
}

        .heroText,.glass,.introGrid,.whyGrid,.card,.step{animation:fadeUp .8s ease both}
        @keyframes fadeUp{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:none}}

        @media(max-width:900px){
          .heroGrid,.introGrid,.whyGrid,.darkGrid{grid-template-columns:1fr}
          .stepCards,.cards{grid-template-columns:1fr}
          .step,.step:first-child,.step:last-child{border-radius:24px}
          .step:after{display:none}
          .flow{grid-template-columns:repeat(2,1fr)}
        }
        @media(max-width:600px){
          .section{padding:68px 0}
          .heroGrid{padding:70px 0}
          .flow{grid-template-columns:1fr}
        }
      `}</style>
    </main>
  );
}
