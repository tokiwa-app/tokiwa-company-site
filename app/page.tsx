export default function Home() {
  const services = [
    ["倉", "倉庫保管・在庫管理", "製品・部材・販促物などをお預かりし、出荷に合わせた在庫管理を行います。"],
    ["組", "製品組立・検査", "部材管理から組立、検査、品質確認まで、製造支援として対応します。"],
    ["加", "流通加工", "検品、アソート、キッティング、ラベル貼付、セット組み、梱包作業に対応します。"],
    ["出", "出荷代行", "ピッキング、梱包、送り状対応、出荷管理など、出荷業務の負荷軽減を支援します。"],
    ["配", "配送・物流支援", "チャーター輸送、定期配送、納品代行など、案件に合わせた配送設計を行います。"],
    ["展", "展示会・イベント物流", "展示会資材、サンプル、販促物の保管・発送・搬入搬出までサポートします。"],
  ];

  const steps = [
    ["STEP 01", "現場を知る", "製品・物流・人員・業務フローを把握し、表面化していない課題も整理します。"],
    ["STEP 02", "課題を共有する", "保管、出荷、加工、配送、事務処理など、改善すべきポイントを明確にします。"],
    ["STEP 03", "仕組みをつくる", "常盤運輸の機能を組み合わせ、お客様に合った物流ソリューションを提案します。"],
  ];

  const tags = [
    "帳票電子化",
    "データ活用",
    "業務フロー改善",
    "出荷事務効率化",
    "デジタル活用への挑戦",
  ];

  const groupItems = [
    "展示会ブースデザイン",
    "展示什器設計・製作",
    "会場設営・施工",
    "展示会物流支援",
    "販促物・サンプル管理",
    "搬入・搬出・保管",
  ];

  return (
    <main className="overflow-hidden text-slate-800">
      <section className="relative bg-[linear-gradient(110deg,rgba(7,35,79,.94),rgba(8,74,138,.84)),url('/images/warehouse-main.jpg')] bg-cover bg-center px-5 py-20 text-white md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[1.15fr_.85fr]">
          <div>
            <p className="mb-4 flex items-center gap-2 text-sm font-bold tracking-[.08em] text-white/90 before:h-[2px] before:w-9 before:rounded-full before:bg-white">
              TOKIWA LOGISTICS
            </p>

            <h1 className="mb-5 text-[42px] font-black leading-[1.05] tracking-wide md:text-7xl lg:text-8xl">
              運ぶ前に、
              <br />
              考える。
            </h1>

            <p className="mb-7 text-lg font-bold md:text-2xl">
              物流を売るのではなく、お客様の課題を解決する仕組みをつくる。
            </p>

            <p className="max-w-3xl text-white/90">
              常盤運輸は、単なる運送会社・倉庫会社ではありません。
              お客様の現場を理解し、保管・組立・検査・梱包・出荷・配送まで、
              業務全体を見ながら最適な仕組みを共につくります。
            </p>
          </div>

          <div className="rounded-3xl border border-white/25 bg-white/10 p-7 shadow-2xl backdrop-blur">
            <h2 className="mb-4 text-xl font-bold">
              まずは、お困りごとをお聞かせください。
            </h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>保管スペースが足りない</li>
              <li>出荷業務が追いつかない</li>
              <li>組立・検査工程に人手が足りない</li>
              <li>物流コストや業務フローを見直したい</li>
              <li>展示会・販促活動の物流を任せたい</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-5 py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[.95fr_1.05fr]">
          <div>
            <p className="mb-4 flex items-center gap-2 text-sm font-bold tracking-[.08em] text-blue-700 before:h-[2px] before:w-9 before:rounded-full before:bg-blue-700">
              OUR APPROACH
            </p>
            <h2 className="mb-5 text-3xl font-black leading-tight tracking-wide text-blue-950 md:text-5xl">
              現場を知り、
              <br />
              課題を共有し、
              <br />
              仕組みをつくる。
            </h2>
            <p className="text-lg font-semibold">
              お客様ごとに状況は異なり、最適な答えも異なります。
              だから私たちは、決まったサービスを売り込むのではなく、
              まずお客様の業務を理解することから始めます。
            </p>
          </div>

          <div className="rounded-3xl border-l-[7px] border-blue-700 bg-white p-8 shadow-xl">
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

        <div className="mx-auto mt-8 grid max-w-6xl gap-5 md:grid-cols-3">
          {steps.map(([num, title, text]) => (
            <div key={num} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md">
              <div className="text-sm font-black tracking-[.08em] text-emerald-600">{num}</div>
              <h3 className="mt-2 text-2xl font-bold text-blue-950">{title}</h3>
              <p className="mt-2 text-slate-500">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-16 md:py-20">
        <div className="mx-auto max-w-6xl rounded-[28px] bg-blue-950 p-8 text-white shadow-xl">
          <h2 className="mb-6 text-center text-2xl font-bold">
            保管から配送まで、一貫対応
          </h2>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
            {["保管", "組立", "検査", "梱包", "出荷", "配送"].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/20 bg-white/10 px-4 py-5 text-center font-extrabold"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 flex items-center gap-2 text-sm font-bold tracking-[.08em] text-blue-700 before:h-[2px] before:w-9 before:rounded-full before:bg-blue-700">
            SERVICE
          </p>
          <h2 className="mb-8 text-3xl font-black text-blue-950 md:text-5xl">
            常盤運輸が提供できること
          </h2>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map(([icon, title, text]) => (
              <article key={title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-md">
                <div className="mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-blue-700 to-emerald-600 text-2xl font-black text-white">
                  {icon}
                </div>
                <h3 className="mb-3 text-xl font-bold text-blue-950">{title}</h3>
                <p className="text-slate-500">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-blue-50 to-white px-5 py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl items-stretch gap-8 md:grid-cols-2">
          <div>
            <p className="mb-4 flex items-center gap-2 text-sm font-bold tracking-[.08em] text-blue-700 before:h-[2px] before:w-9 before:rounded-full before:bg-blue-700">
              BACK OFFICE
            </p>
            <h2 className="mb-5 text-3xl font-black leading-tight text-blue-950 md:text-5xl">
              バックオフィス業務改善にも取り組みます。
            </h2>
            <p className="text-lg font-semibold">
              受発注業務、出荷事務、在庫管理など、物流の周辺業務にも改善の余地があります。
              常盤運輸では、現場と事務の両面から業務フローを見直し、
              デジタル活用の可能性もお客様と共に検討していきます。
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
            <h3 className="mb-4 text-2xl font-bold text-blue-950">取り組みテーマ</h3>
            <p>
              紙・FAX・手入力作業・情報の分散など、日々の業務に潜む負担を整理し、
              無理なく進められる効率化を考えます。
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {tags.map((tag) => (
                <span key={tag} className="rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-950">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-950 px-5 py-16 text-white md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-9 md:grid-cols-2">
          <div>
            <p className="mb-4 flex items-center gap-2 text-sm font-bold tracking-[.08em] text-white before:h-[2px] before:w-9 before:rounded-full before:bg-white">
              FUTABA GROUP
            </p>
            <h2 className="mb-5 text-3xl font-black md:text-5xl">
              双葉グループの総合力
            </h2>
            <p>
              常盤運輸の物流・流通加工機能に加え、双葉グループのネットワークを活かすことで、
              展示会や販促活動に関する幅広いサポートも可能です。
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {groupItems.map((item) => (
                <div key={item} className="rounded-2xl bg-white/10 px-4 py-3 font-bold">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "展示会ブース写真\nimages/exhibition-booth.jpg",
              "展示什器写真\nimages/display-fixture.jpg",
              "倉庫・保管写真\nimages/warehouse.jpg",
              "組立・作業写真\nimages/assembly.jpg",
            ].map((text) => (
              <div
                key={text}
                className="grid min-h-[150px] place-items-center rounded-2xl border border-dashed border-white/40 bg-white/10 p-5 text-center font-bold text-white/85"
              >
                <span>
                  {text.split("\n").map((line) => (
                    <span key={line}>
                      {line}
                      <br />
                    </span>
                  ))}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-5 py-16 text-center md:py-20">
        <div className="mx-auto max-w-6xl rounded-[28px] bg-white px-7 py-12 shadow-xl">
          <h2 className="mb-4 text-3xl font-black text-blue-950 md:text-5xl">
            物流のその先へ。
          </h2>
          <p className="mx-auto mb-7 max-w-3xl text-slate-500">
            私たちは「何を売るか」ではなく、
            「どうすればもっと良くなるか」をお客様と一緒に考える会社です。
          </p>
          <a
            href="/contact/"
            className="inline-flex min-w-56 items-center justify-center rounded-full bg-blue-700 px-7 py-3 font-extrabold text-white no-underline"
          >
            お問い合わせ
          </a>
        </div>
      </section>
    </main>
  );
}
