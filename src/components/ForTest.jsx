import { Button } from "@progress/kendo-react-buttons";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import "../style/main.css";
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LayoutSample() {
  const nav = useNavigate();
  const pdfExportComponent = useRef(null);
  const [layoutSelection, setLayoutSelection] = useState({
    text: "A4",
    value: "size-a4",
  });

  const ddData = [
    { text: "A4", value: "size-a4" },
    { text: "Letter", value: "size-letter" },
    { text: "Executive", value: "size-executive" },
  ];

  const handleExportWithComponent = (event) => {
    pdfExportComponent.current.save();
  };

  const updatePageLayout = (event) => {
    setLayoutSelection(event.target.value);
  };

  return (
    <div id="example">
      <div className="box wide hidden-on-narrow d-flex justify-content-between">
        <div className="box-col">
          <Button primary={true} onClick={() => nav("/price/204")}>
            Назад
          </Button>
        </div>
        <div className="box-col">
          <Button primary={true} onClick={handleExportWithComponent}>
            Export PDF
          </Button>
        </div>
      </div>

      <div className="page-container hidden-on-narrow">
        <PDFExport ref={pdfExportComponent}>
          <div className={`pdf-page ${layoutSelection.value}`}>
            <div className="inner-page">
              <div className="in_top">
                <div className="in_top_box">
                  <img className="in_logo" src="/img/logo.png" alt="" />
                  <div className="in_top_box_main">
                    <div className="in_top_item">
                      <div className="in_top_item_h">Здание</div>
                      <div className="in_top_item_p">3</div>
                    </div>
                    <div className="in_top_item ">
                      <div className="in_top_item_h">подъезд</div>
                      <div className="in_top_item_p">2</div>
                    </div>
                    <div className="in_top_item">
                      <div className="in_top_item_h">Этаж</div>
                      <div className="in_top_item_p">7</div>
                    </div>
                    <div className="in_top_item ">
                      <div className="in_top_item_h">Дом</div>
                      <div className="in_top_item_p">№ 267</div>
                    </div>
                    <div className="in_top_item">
                      <div className="in_top_item_h">Состояние</div>
                      <div className="in_top_item_p">Без ремонта</div>
                    </div>
                  </div>
                </div>
                <img className="in_logo_2" src="/img/logo_2.png" alt="" />
              </div>

              <div className="in_box_text">
                <div className="in_box_img">
                  <div className="mt-1 in_box_images  w-75 ms-3">
                    <img
                      className="in_box_in_img"
                      src="/img/267.1.png"
                      alt=""
                    />
                    <img className="in_box_in_img " src="/img/267.png" alt="" />
                  </div>
                  <div className="in_box_text_2">
                    <div className="in_text_2_h">Адрес:</div>
                    <div className="in_text_2_p_2">
                      {" "}
                      111018, Ташкентский область, Ташкентский район, ул. Куйи
                      Кук-Терак 95
                    </div>
                    <div className="in_text_2_h">Колл-центр :</div>
                    <div className="in_text_2_p">+ 998 (88) 113 00 50</div>
                    <div className="in_text_2_p">+ 998 (88) 202 00 05</div>
                    <div className="in_text_2_h">Уважаемый клиент:</div>
                    <div className="in_text_2_p">
                      __________________________
                    </div>
                  </div>
                </div>

                <div className="in_text">
                  <div className="in_text_main">
                    <div className="in_text_h">Количество комнат:</div>
                    <div className="in_text_p in_text_p_active">1x</div>
                    <div className="in_text_h">Общая площадь:</div>
                    <div className="in_text_p in_text_p_active">33.0 м2</div>
                    {/* <div className={`in_text_h`}>Площадь Террасы:</div> */}
                    {/* <div className={`in_text_p `}>2.6 м2</div> */}
                    <div className="in_text_h">Цена за м2:</div>
                    <div className="in_text_p">620 $</div>
                    {/* <div className={`in_text_h`}>Цена за м2 террасы:</div> */}
                    {/* <div className={`in_text_p `}>360 $</div> */}
                  </div>

                  <div className="in_text_main_2">
                    <div className="in_text_h_2 mt-5">
                      Первоначaльный платеж:
                    </div>
                    <div className="in_text_p_2">6,060 $</div>
                    <div className="in_text_h_2">Сумма остатка:</div>
                    <div className="in_text_p_2">14,400 $ </div>
                    <div className="in_text_h_2">Ежемесячно оплата:</div>
                    <div className="in_text_p_2 mt-2"> 24 месяц - 600 $</div>
                    {/* <div className="in_text_p_2 mt-2">1 - месяц - 28,235 $</div> */}
                    <div className="in_text_h_2 mt-5">Cумма продажи:</div>
                    <div className="in_text_p_2 in_text_p_3">20,460 $</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PDFExport>
      </div>
    </div>
  );
}

export default LayoutSample;
