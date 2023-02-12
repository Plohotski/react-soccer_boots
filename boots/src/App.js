
function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <section className="header-left">
          <svg className="header-left__logo"/>
          <div className="header-left__info">
            <h3 className="header-left__info-title">Movement Rhythm</h3>
            <p className="header-left__info-subtitle">Store for the best sneakers</p>
          </div>
        </section>
        <section className="header-right">
          <div className="header-right__buy">
            <svg className="header-right__buy-logo"/>
            <span className="header-right__buy-cost">1205 $</span>
          </div>
          <div className="header-right__user">
            <svg className="header-right__user-logo" />
          </div>
        </section>
      </header>
      <main>
        <section className="content">
          <h1>All Sneakers</h1>
          .....
        </section>
      </main>
    </div>
  );
}

export default App;
