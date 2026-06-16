export default function Home() {
  const troubles = [
    "保管スペースが足りない",
    "出荷業務に時間を取られている",
    "組立・検査工程の人手が足りない",
    "展示会や販促活動の準備が負担になっている",
    "紙・FAX・手入力などの業務を見直したい",
  ];

  const messages = [
    ["01", "現場を知る", "製品・人・モノ・情報の流れを理解し、表面的ではない課題を見つけます。"],
    ["02", "課題を共有する", "お客様と同じ目線で、今困っていること、これから困りそうなことを整理します。"],
    ["03", "仕組みをつくる", "保管・組立・検査・梱包・出荷・配送を組み合わせ、最適な形にします。"],
  ];

  const flow = ["保管", "組立", "検査", "梱包", "出荷", "配送"];

  const solutions = [
    ["保管・在庫管理", "製品・部材・販促物などをお預かりし、出荷に合わせた管理を行います。", "images/warehouse.jpg"],
    ["製品組立・検査", "部材管理、組立、検査、品質確認など、製造支援にも対応します。", "images/assembly.jpg"],
    ["流通加工・梱包", "検品、アソート、キッティング、ラベル貼付、セット組み、梱包作業に対応します。", "images/processing.jpg"],
    ["出荷代行・配送", "出荷作業からチャーター輸送、定期配送、納品代行までご相談いただけます。", "images/shipping.jpg"],
    ["展示会・販促物流", "展示会資材、サンプル、販促物の保管・発送・搬入搬出を支援します。", "images/exhibition.jpg"],
    ["業務改善", "受発注、出荷事務、在庫管理など、物流周辺業務の改善も一緒に考えます。", "images/office-work.jpg"],
  ];

  const tags = [
    "現場DX",
    "業務アプリ開発",
    "AI活用",
    "出荷事務効率化",
    "業務フロー改善",
  ];

  const groupItems = [
    "ブースデザイン",
    "展示什器設計",
    "展示什器製作",
    "会場設営・施工",
    "搬入・搬出",
    "資材保管・管理",
  ];

  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="hero-label">TOKIWA LOGISTICS / HIRAKATA</div>
            <h1>運ぶ前に、<br />考える。</h1>
            <p className="hero-lead">
              物流を売るのではなく、<br />
              お客様の課題を解決する仕組みをつくる。
            </p>
            <p className="hero-copy">
              常盤運輸は、単なる運送会社・倉庫会社ではありません。お客様ごとに異なる課題に向き合い、現場を知り、課題を共有し、最適な物流の仕組みを共につくります。
            </p>
          </div>

          <aside className="hero-panel">
            <h2>こんなお困りごとはありませんか？</h2>
            <ul className="trouble-list">
              {troubles.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="section philosophy">
        <div className="container center">
          <p className="eyebrow">OUR PHILOSOPHY</p>
          <h2 className="section-title">
            決まったサービスを売り込むのではなく、<br />
            お客様に必要な答えを一緒に探します。
          </h2>
          <p className="section-lead">
            倉庫が必要なのか。流通加工が必要なのか。配送設計を見直すべきなのか。それとも、出荷事務や業務フローの改善が必要なのか。答えは、お客様の現場を知って初めて見えてきます。
          </p>

          <div className="cards3">
            {messages.map(([no, title, text]) => (
              <div className="message-card" data-no={no} key={no}>
                <strong>{title}</strong>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section statement">
        <div className="container">
          <div className="statement-box">
            <div className="statement-copy">
              <p className="eyebrow">WHY TOKIWA</p>
              <h2>スペック勝負でも、単価勝負でもない。</h2>
              <p>
                倉庫面積や作業単価だけでは、同業他社との差別化はできません。常盤運輸が目指すのは、お客様の業務全体を理解した上で、「どうすればもっと良くなるか」を一緒に考える課題解決型の物流です。
              </p>
            </div>
            <div className="quote">
              <p>「何を売るか」ではなく、<br />「何に困っているのか」から始める。</p>
              <small>それが、常盤運輸の考え方です。</small>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="flow-title-wrap">
            <div>
              <p className="eyebrow">ONE STOP SOLUTION</p>
              <h2 className="section-title">工程をつなぎ、全体最適で考える。</h2>
            </div>
            <p className="section-lead flow-lead">
              個別の作業だけでなく、前後工程まで見ながら最適な流れを設計します。
            </p>
          </div>

          <div className="flow">
            {flow.map((item) => (
              <div className="flow-item" key={item}>{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="section solutions">
        <div className="container">
          <p className="eyebrow">SOLUTION</p>
          <h2 className="section-title">課題に合わせて、必要な機能を組み合わせます。</h2>
          <p className="section-lead left">
            下記はサービスメニューではなく、課題解決のための手段です。お客様の状況に合わせて、必要な部分だけ、または一貫対応でご提案します。
          </p>

          <div className="solution-grid">
            {solutions.map(([title, text, image]) => (
              <article className="solution" key={title}>
                <div className="photo">
                  写真差替え枠<br />{image}
                </div>
                <div className="solution-body">
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>

          <p className="dev-note">※写真枠はホームページ担当者側で実画像に差し替えできます。</p>
        </div>
      </section>

      <section className="section backoffice">
        <div className="container backoffice-grid">
          <div>
            <p className="eyebrow">BACK OFFICE IMPROVEMENT</p>
            <h2 className="section-title">物流の周辺業務にも、改善の余地があります。</h2>
            <p>
              受発注業務、出荷事務、在庫管理、帳票管理。物流の前後には、紙・FAX・手入力・情報の分散など、見えにくい負担が多くあります。常盤運輸では、現場と事務の両面から業務フローを見直し、デジタル活用の可能性もお客様と共に検討していきます。
            </p>
            <div className="tags">
              {tags.map((tag) => (
                <span className="tag" key={tag}>{tag}</span>
              ))}
            </div>
          </div>

          <div className="note-card">
            <h3>できることから、無理なく改善。</h3>
            <p>
              DXを目的にするのではなく、日々の業務を楽にすることを目的にします。現場に合わない仕組みではなく、運用できる改善を一緒に考えます。
            </p>
          </div>
        </div>
      </section>

      <section className="section group">
        <div className="container group-layout">
          <div className="group-panel">
            <p className="eyebrow">FUTABA GROUP</p>
            <h2 className="section-title">双葉グループの総合力で、物流の枠を超える。</h2>
            <p className="section-lead left">
              常盤運輸の物流・流通加工機能に加え、双葉グループのネットワークを活かすことで、展示会や販促活動に関する幅広いサポートも可能です。
            </p>
            <div className="group-list">
              {groupItems.map((item) => (
                <div key={item}>{item}</div>
              ))}
            </div>
          </div>

          <div className="gallery">
            <div className="gallery-slot">FCG展示会写真<br />images/exhibition-booth.jpg</div>
            <div className="gallery-slot">什器・サイン写真<br />images/sign-fixture.jpg</div>
            <div className="gallery-slot">搬入出写真<br />images/carry-in.jpg</div>
            <div className="gallery-slot">保管・管理写真<br />images/storage.jpg</div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>物流のその先へ。</h2>
          <p>
            私たちは「何を売るか」ではなく、<br />
            「どうすればもっと良くなるか」をお客様と一緒に考える会社です。
          </p>
          <a className="btn" href="/contact/">まずは相談する</a>
        </div>
      </section>

      <style>{`
        :root{
          --navy:#08346f;
          --dark:#061f46;
          --blue:#0b65b9;
          --green:#1b9b63;
          --sky:#eaf5ff;
          --bg:#f6f9fc;
          --text:#172033;
          --muted:#5d6b7d;
          --line:#d9e4ef;
          --white:#fff;
          --shadow:0 18px 44px rgba(10,35,75,.14);
          --radius:22px;
        }

        *{box-sizing:border-box}
        body{
          margin:0;
          font-family:-apple-system,BlinkMacSystemFont,"Hiragino Kaku Gothic ProN","Yu Gothic","YuGothic","Meiryo",sans-serif;
          color:var(--text);
          line-height:1.8;
          background:#fff;
        }
        a{text-decoration:none;color:inherit}
        .container{width:min(1120px,100%);margin:auto;padding:0 22px}
        .section{padding:84px 0}
        .eyebrow{display:inline-flex;align-items:center;gap:10px;margin:0 0 14px;color:var(--blue);font-size:14px;font-weight:900;letter-spacing:.12em}
        .eyebrow:before{content:"";width:38px;height:3px;border-radius:999px;background:currentColor}
        h1,h2,h3{margin:0;color:var(--navy);line-height:1.18}
        p{margin:0}
        .section-title{font-size:clamp(30px,4.6vw,54px);margin-bottom:18px}
        .section-lead{max-width:880px;color:var(--muted);font-size:18px;font-weight:650}
        .center{text-align:center}
        .center .section-lead{margin:0 auto}
        .left{text-align:left;margin-left:0}
        .hero{
          min-height:92vh;
          display:grid;
          align-items:center;
          color:#fff;
          background:
            radial-gradient(circle at 78% 25%,rgba(27,155,99,.34),transparent 24%),
            linear-gradient(115deg,rgba(6,31,70,.97),rgba(8,52,111,.92) 52%,rgba(11,101,185,.80)),
            url('/images/main-visual.jpg') center/cover no-repeat;
        }
        .hero-grid{display:grid;grid-template-columns:1.1fr .9fr;gap:42px;align-items:center;padding:70px 0}
        .hero-label{display:inline-block;padding:8px 14px;border:1px solid rgba(255,255,255,.35);border-radius:999px;background:rgba(255,255,255,.12);font-size:13px;font-weight:800;letter-spacing:.1em;margin-bottom:24px}
        .hero h1{color:#fff;font-size:clamp(48px,8vw,96px);font-weight:950;margin-bottom:24px}
        .hero-lead{font-size:clamp(20px,3vw,34px);font-weight:900;line-height:1.45;margin-bottom:24px}
        .hero-copy{max-width:700px;color:rgba(255,255,255,.88);font-size:17px}
        .hero-panel{border-radius:30px;padding:30px;background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.25);box-shadow:0 22px 60px rgba(0,0,0,.22);backdrop-filter:blur(12px)}
        .hero-panel h2{color:#fff;font-size:24px;margin-bottom:18px}
        .trouble-list{display:grid;gap:12px;margin:0;padding:0;list-style:none}
        .trouble-list li{display:flex;gap:12px;padding:12px 14px;border-radius:14px;background:rgba(255,255,255,.12);font-weight:700}
        .trouble-list li:before{content:"✓";background:var(--green);width:24px;height:24px;border-radius:50%;display:grid;place-items:center;flex:0 0 auto;font-size:14px;font-weight:900}
        .philosophy{background:#fff}
        .cards3{margin-top:42px;display:grid;grid-template-columns:repeat(3,1fr);gap:22px}
        .message-card{position:relative;padding:30px 26px;background:var(--bg);border:1px solid var(--line);border-radius:var(--radius);box-shadow:0 12px 28px rgba(10,35,75,.06);text-align:left}
        .message-card strong{display:block;color:var(--navy);font-size:26px;margin-bottom:10px}
        .message-card span{color:var(--muted);font-weight:650}
        .message-card:before{content:attr(data-no);position:absolute;right:20px;top:14px;color:rgba(11,101,185,.12);font-size:54px;font-weight:950;line-height:1}
        .statement{background:linear-gradient(180deg,var(--sky),#fff)}
        .statement-box{display:grid;grid-template-columns:.9fr 1.1fr;gap:36px;align-items:center;background:#fff;border-radius:32px;padding:42px;box-shadow:var(--shadow)}
        .statement-copy{border-left:8px solid var(--blue);padding-left:26px}
        .statement-copy h2{font-size:clamp(30px,4vw,48px);margin-bottom:18px}
        .statement-copy p{font-size:18px;font-weight:650;color:var(--muted)}
        .quote{background:var(--navy);color:#fff;border-radius:26px;padding:34px}
        .quote p{font-size:22px;line-height:1.7;font-weight:900}
        .quote small{display:block;margin-top:14px;color:rgba(255,255,255,.75);font-weight:700}
        .flow-title-wrap{display:flex;justify-content:space-between;gap:30px;align-items:flex-end;margin-bottom:30px}
        .flow-title-wrap .section-title{margin:0}
        .flow-lead{margin:0;max-width:430px;text-align:left}
        .flow{display:grid;grid-template-columns:repeat(6,1fr);gap:12px;padding:28px;background:var(--navy);border-radius:30px;box-shadow:var(--shadow)}
        .flow-item{position:relative;min-height:110px;display:grid;place-items:center;text-align:center;color:#fff;background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.18);border-radius:18px;font-size:22px;font-weight:950}
        .flow-item:not(:last-child):after{content:"→";position:absolute;right:-15px;top:50%;transform:translateY(-50%);z-index:2;color:#fff;font-weight:950}
        .solutions{background:var(--bg)}
        .solution-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;margin-top:36px}
        .solution{background:#fff;border:1px solid var(--line);border-radius:var(--radius);overflow:hidden;box-shadow:0 14px 30px rgba(10,35,75,.08)}
        .photo{min-height:160px;background:linear-gradient(135deg,rgba(8,52,111,.85),rgba(27,155,99,.65)),var(--sky);display:grid;place-items:center;color:#fff;text-align:center;font-weight:900;padding:18px}
        .solution-body{padding:24px}
        .solution h3{font-size:23px;margin-bottom:8px}
        .solution p{color:var(--muted);font-weight:600}
        .dev-note{margin-top:18px;color:#7c8797;font-size:13px;text-align:center}
        .backoffice{color:#fff;background:radial-gradient(circle at 10% 20%,rgba(27,155,99,.25),transparent 22%),linear-gradient(135deg,var(--dark),var(--navy))}
        .backoffice .eyebrow,.backoffice h2{color:#fff}
        .backoffice .eyebrow:before{background:#fff}
        .backoffice-grid{display:grid;grid-template-columns:1fr 1fr;gap:34px;align-items:center}
        .backoffice p{color:rgba(255,255,255,.84);font-size:17px;font-weight:650}
        .tags{display:flex;flex-wrap:wrap;gap:12px;margin-top:24px}
        .tag{display:inline-flex;padding:9px 14px;border-radius:999px;background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.2);font-weight:800}
        .note-card{background:#fff;color:var(--text);border-radius:28px;padding:32px;box-shadow:0 20px 50px rgba(0,0,0,.24)}
        .note-card h3{font-size:26px;margin-bottom:12px}
        .note-card p{color:var(--muted)}
        .group{background:#fff}
        .group-layout{display:grid;grid-template-columns:.95fr 1.05fr;gap:36px;align-items:center}
        .group-panel{padding:34px;border-radius:30px;background:var(--bg);border:1px solid var(--line)}
        .group-list{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:24px}
        .group-list div{padding:13px 15px;background:#fff;border:1px solid var(--line);border-radius:14px;color:var(--navy);font-weight:850}
        .gallery{display:grid;grid-template-columns:1fr 1fr;gap:14px}
        .gallery-slot{min-height:170px;display:grid;place-items:center;text-align:center;color:#fff;font-weight:900;border-radius:20px;overflow:hidden;background:linear-gradient(135deg,rgba(8,52,111,.8),rgba(11,101,185,.55)),#cbd5e1}
        .cta{padding:90px 0;text-align:center;color:#fff;background:linear-gradient(120deg,rgba(6,31,70,.96),rgba(11,101,185,.82)),url('/images/footer-visual.jpg') center/cover no-repeat}
        .cta h2{color:#fff;font-size:clamp(34px,5vw,62px);margin-bottom:18px}
        .cta p{max-width:780px;margin:0 auto 30px;color:rgba(255,255,255,.86);font-size:18px;font-weight:700}
        .btn{display:inline-flex;align-items:center;justify-content:center;min-width:230px;padding:14px 28px;border-radius:999px;background:#fff;color:var(--navy);font-weight:950;box-shadow:0 14px 30px rgba(0,0,0,.18)}

        @media(max-width:920px){
          .hero-grid,.statement-box,.backoffice-grid,.group-layout{grid-template-columns:1fr}
          .cards3,.solution-grid{grid-template-columns:1fr}
          .flow{grid-template-columns:repeat(2,1fr)}
          .flow-item:not(:last-child):after{display:none}
          .flow-title-wrap{display:block}
          .flow-lead{margin-top:18px}
        }

        @media(max-width:640px){
          .section{padding:62px 0}
          .hero{min-height:auto}
          .hero-grid{padding:58px 0}
          .hero-panel,.statement-box{padding:24px}
          .flow{grid-template-columns:1fr;padding:18px}
          .group-list,.gallery{grid-template-columns:1fr}
        }
      `}</style>
    </main>
  );
}
