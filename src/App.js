import React, { useState } from "react";

import "./styles.css";
import { connect } from "react-redux";
import { listeyeEkle,isaretle,temizle } from "./actions";

function App(props) {
  const [text, setText] = useState("");

  return (
    <div className="App">
      <h1>Yapılacaklar Listesi</h1>
      <div className="ekleme_formu">
        <input
          placeholer="listeye ekle"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          onClick={() => {
            setText('')
            props.listeyeEkle(text);
          }}
        >
          Ekle
        </button>
      </div>
      <div className="liste">
        {props.liste.map((item) => (
          <div key={item.id} className={item.tamamlandi ? "yapildi" : ""} onClick={()=>props.isaretle(item)}>
            {item.baslik}
          </div>
        ))}
      </div>
      <button className="temizle" onClick={()=>props.temizle()}>Tamamlananları Temizle</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    liste: state.liste,
  };
};

export default connect(mapStateToProps, { listeyeEkle,isaretle,temizle })(App);
