export default function Home() {
  return (
    <main>
      <section
        style={{
          minHeight: "92vh",
          display: "grid",
          alignItems: "center",
          color: "#fff",
          background:
            "linear-gradient(115deg, rgba(6,31,70,.97), rgba(8,52,111,.92), rgba(11,101,185,.8))",
          padding: "80px 24px",
        }}
      >
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <p style={{ fontWeight: 800, letterSpacing: ".12em" }}>
            TOKIWA LOGISTICS / HIRAKATA
          </p>

          <h1
            style={{
              fontSize: "clamp(48px, 8vw, 96px)",
              lineHeight: 1.15,
              margin: "24px 0",
            }}
          >
            運ぶ前に、
            <br />
            考える。
          </h1>

          <p
            style={{
              fontSize: "clamp(20px, 3vw, 34px)",
              fontWeight: 900,
              lineHeight: 1.45,
              marginBottom: 24,
            }}
          >
            物流を売るのではなく、
            <br />
            お客様の課題を解決する仕組みをつくる。
          </p>

          <p style={{ maxWidth: 720, fontSize: 17, lineHeight: 1.9 }}>
            常盤運輸は、単なる運送会社・倉庫会社ではありません。
            お客様ごとに異なる課題に向き合い、現場を知り、課題を共有し、
            最適な物流の仕組みを共につくります。
          </p>
        </div>
      </section>

      <section style={{ padding: "84px 24px" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", textAlign: "center" }}>
          <p style={{ color: "#0b65b9", fontWeight: 900 }}>
            OUR PHILOSOPHY
          </p>

          <h2
            style={{
              color: "#08346f",
              fontSize: "clamp(30px, 4.6vw, 54px)",
              lineHeight: 1.2,
              marginBottom: 24,
            }}
          >
            決まったサービスを売り込むのではなく、
            <br />
            お客様に必要な答えを一緒に探します。
          </h2>

          <p style={{ color: "#5d6b7d", fontSize: 18, lineHeight: 1.9 }}>
            倉庫が必要なのか。流通加工が必要なのか。
            配送設計を見直すべきなのか。答えは、お客様の現場を知って初めて見えてきます。
          </p>
        </div>
      </section>

      <section style={{ background: "#f6f9fc", padding: "84px 24px" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <h2
            style={{
              color: "#08346f",
              fontSize: "clamp(30px, 4.6vw, 54px)",
              marginBottom: 32,
            }}
          >
            工程をつなぎ、全体最適で考える。
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
              gap: 12,
              background: "#08346f",
              padding: 28,
              borderRadius: 30,
            }}
          >
            {["保管", "組立", "検査", "梱包", "出荷", "配送"].map((item) => (
              <div
                key={item}
                style={{
                  background: "rgba(255,255,255,.12)",
                  color: "#fff",
                  padding: "32px 12px",
                  borderRadius: 18,
                  textAlign: "center",
                  fontSize: 22,
                  fontWeight: 900,
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "84px 24px" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <p style={{ color: "#0b65b9", fontWeight: 900 }}>SOLUTION</p>

          <h2
            style={{
              color: "#08346f",
              fontSize: "clamp(30px, 4.6vw, 54px)",
              marginBottom: 32,
            }}
          >
            課題に合わせて、必要な機能を組み合わせます。
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 22,
            }}
          >
            {[
              ["保管・在庫管理", "製品・部材・販促物などをお預かりし、出荷に合わせた管理を行います。"],
              ["製品組立・検査", "部材管理、組立、検査、品質確認など、製造支援にも対応します。"],
              ["流通加工・梱包", "検品、アソート、キッティング、ラベル貼付、セット組み、梱包作業に対応します。"],
              ["出荷代行・配送", "出荷作業からチャーター輸送、定期配送、納品代行までご相談いただけます。"],
              ["展示会・販促物流", "展示会資材、サンプル、販促物の保管・発送・搬入搬出を支援します。"],
              ["業務改善", "受発注、出荷事務、在庫管理など、物流周辺業務の改善も一緒に考えます。"],
            ].map(([title, text]) => (
              <article
                key={title}
                style={{
                  background: "#fff",
                  border: "1px solid #d9e4ef",
                  borderRadius: 22,
                  padding: 26,
                  boxShadow: "0 14px 30px rgba(10,35,75,.08)",
                }}
              >
                <h3 style={{ color: "#08346f", fontSize: 24 }}>{title}</h3>
                <p style={{ color: "#5d6b7d", lineHeight: 1.8 }}>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          padding: "90px 24px",
          textAlign: "center",
          color: "#fff",
          background: "linear-gradient(120deg, #061f46, #0b65b9)",
        }}
      >
        <h2 style={{ fontSize: "clamp(34px, 5vw, 62px)" }}>
          物流のその先へ。
        </h2>

        <p style={{ fontSize: 18, lineHeight: 1.9 }}>
          私たちは「何を売るか」ではなく、
          <br />
          「どうすればもっと良くなるか」をお客様と一緒に考える会社です。
        </p>
      </section>
    </main>
  );
}
