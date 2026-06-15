export default function Home() {
  return (
    <main className="tokiwa-page">
      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <div>
            <p className="eyebrow">TOKIWA LOGISTICS</p>
            <h1>
              運ぶ前に、
              <br />
              考える。
            </h1>
            <p className="hero-lead">
              物流を売るのではなく、お客様の課題を解決する仕組みをつくる。
            </p>
            <p className="hero-copy">
              常盤運輸は、単なる運送会社・倉庫会社ではありません。
              お客様の現場を理解し、保管・組立・検査・梱包・出荷・配送まで、
              業務全体を見ながら最適な仕組みを共につくります。
            </p>
          </div>

          <div className="hero-card">
            <h2>まずは、お困りごとをお聞かせください。</h2>
            <ul>
              <li>保管スペースが足りない</li>
              <li>出荷業務が追いつかない</li>
              <li>組立・検査工程に人手が足りない</li>
              <li>物流コストや業務フローを見直したい</li>
              <li>展示会・販促活動の物流を任せたい</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="section intro">
        <div className="container intro-grid">
          <div>
            <p className="eyebrow">OUR APPROACH</p>
            <h2 className="section-title">
              現場を知り、
              <br />
              課題を共有し、
              <br />
              仕組みをつくる。
            </h2>
            <p className="text-large">
              お客様ごとに状況は異なり、最適な答えも異なります。
              だから私たちは、決まったサービスを売り込むのではなく、
              まずお客様の業務を理解することから始めます。
            </p>
          </div>

          <div className="message-box">
            <p>
              「倉庫があります」「運送できます」「流通加工できます」だけでは、
              本当の課題解決にはつながりません。
              <br />
              <br />
              必要なのは、現場の流れ、人の動き、情報の流れ、コスト構造を見ながら、
              お客様にとって無理のない改善策を一緒に組み立てることです。
            </p>
          </div>
        </div>

        <div className="container steps">
          <div className="step">
            <div className="step-number">STEP 01</div>
            <h3>現場を知る</h3>
            <p>
              製品・物流・人員・業務フローを把握し、表面化していない課題も整理します。
            </p>
          </div>

          <div className="step">
            <div className="step-number">STEP 02</div>
            <h3>課題を共有する</h3>
            <p>
              保管、出荷、加工、配送、事務処理など、改善すべきポイントを明確にします。
            </p>
          </div>

          <div className="step">
            <div className="step-number">STEP 03</div>
            <h3>仕組みをつくる</h3>
            <p>
              常盤運輸の機能を組み合わせ、お客様に合った物流ソリューションを提案します。
            </p>
          </div>
        </div>
      </section>

      {/* FLOW */}
      <section className="section">
        <div className="container">
          <div className="flow-wrap">
            <h2 className="flow-title">保管から配送まで、一貫対応</h2>
            <div className="flow" aria-label="保管から配送までの対応フロー">
              <div className="flow-item">保管</div>
              <div className="flow-item">組立</div>
              <div className="flow-item">検査</div>
              <div className="flow-item">梱包</div>
              <div className="flow-item">出荷</div>
              <div className="flow-item">配送</div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section services">
        <div className="container">
          <p className="eyebrow">SERVICE</p>
          <h2 className="section-title">常盤運輸が提供できること</h2>

          <div className="cards">
            <article className="card">
              <div className="icon">倉</div>
              <h3>倉庫保管・在庫管理</h3>
              <p>
                製品・部材・販促物などをお預かりし、出荷に合わせた在庫管理を行います。
              </p>
            </article>

            <article className="card">
              <div className="icon">組</div>
              <h3>製品組立・検査</h3>
              <p>
                部材管理から組立、検査、品質確認まで、製造支援として対応します。
              </p>
            </article>

            <article className="card">
              <div className="icon">加</div>
              <h3>流通加工</h3>
              <p>
                検品、アソート、キッティング、ラベル貼付、セット組み、梱包作業に対応します。
              </p>
            </article>

            <article className="card">
              <div className="icon">出</div>
              <h3>出荷代行</h3>
              <p>
                ピッキング、梱包、送り状対応、出荷管理など、出荷業務の負荷軽減を支援します。
              </p>
            </article>

            <article className="card">
              <div className="icon">配</div>
              <h3>配送・物流支援</h3>
              <p>
                チャーター輸送、定期配送、納品代行など、案件に合わせた配送設計を行います。
              </p>
            </article>

            <article className="card">
              <div className="icon">展</div>
              <h3>展示会・イベント物流</h3>
              <p>
                展示会資材、サンプル、販促物の保管・発送・搬入搬出までサポートします。
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* IMPROVEMENT */}
      <section className="section improvement">
        <div className="container improvement-grid">
          <div>
            <p className="eyebrow">BACK OFFICE</p>
            <h2 className="section-title">
              バックオフィス業務改善にも取り組みます。
            </h2>
            <p className="text-large">
              受発注業務、出荷事務、在庫管理など、物流の周辺業務にも改善の余地があります。
              常盤運輸では、現場と事務の両面から業務フローを見直し、
              デジタル活用の可能性もお客様と共に検討していきます。
            </p>
          </div>

          <div className="improvement-box">
            <h3>取り組みテーマ</h3>
            <p>
              紙・FAX・手入力作業・情報の分散など、日々の業務に潜む負担を整理し、
              無理なく進められる効率化を考えます。
            </p>
            <div className="tag-list">
              <span className="tag">帳票電子化</span>
              <span className="tag">データ活用</span>
              <span className="tag">業務フロー改善</span>
              <span className="tag">出荷事務効率化</span>
              <span className="tag">デジタル活用への挑戦</span>
            </div>
          </div>
        </div>
      </section>

      {/* GROUP */}
      <section className="section group">
        <div className="container group-grid">
          <div>
            <p className="eyebrow">FUTABA GROUP</p>
            <h2 className="section-title">双葉グループの総合力</h2>
            <p>
              常盤運輸の物流・流通加工機能に加え、双葉グループのネットワークを活かすことで、
              展示会や販促活動に関する幅広いサポートも可能です。
            </p>

            <div className="group-list">
              <div>展示会ブースデザイン</div>
              <div>展示什器設計・製作</div>
              <div>会場設営・施工</div>
              <div>展示会物流支援</div>
              <div>販促物・サンプル管理</div>
              <div>搬入・搬出・保管</div>
            </div>
          </div>

          <div className="photo-grid" aria-label="展示会・物流関連写真">
            <div className="photo-slot">
              展示会ブース写真
              <br />
              images/exhibition-booth.jpg
            </div>
            <div className="photo-slot">
              展示什器写真
              <br />
              images/display-fixture.jpg
            </div>
            <div className="photo-slot">
              倉庫・保管写真
              <br />
              images/warehouse.jpg
            </div>
            <div className="photo-slot">
              組立・作業写真
              <br />
              images/assembly.jpg
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta">
        <div className="container">
          <div className="cta-box">
            <h2>物流のその先へ。</h2>
            <p>
              私たちは「何を売るか」ではなく、
              「どうすればもっと良くなるか」をお客様と一緒に考える会社です。
            </p>
            <a className="button" href="/contact/">
              お問い合わせ
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
