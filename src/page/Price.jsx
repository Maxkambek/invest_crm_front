import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { API_PATH } from "../tools/constants";
import LayoutSample from "../components/ForTest";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Button } from "@progress/kendo-react-buttons";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import "../style/main.css";
import { useNavigate } from "react-router-dom";

const Price = () => {
  const pk = useParams();
  const [bar, setBar] = useState(2);
  const [data, setData] = useState();
  const [podez, setPodez] = useState(localStorage.getItem("podez") || "");
  const [block, setBlock] = useState(localStorage.getItem("block") || "");
  const [etaj, setEtaj] = useState(localStorage.getItem("etaj") || "");
  const [dom, setDom] = useState(localStorage.getItem("dom") || "");
  const [oy, setOy] = useState(12);
  const [price30, setPrice30] = useState();
  const [price50, setPrice50] = useState();
  const [price100, setPrice100] = useState();

  const [valuePrice1, setValuePrice1] = useState(
    localStorage.getItem("price1") || ""
  );
  const [valuePrice2, setValuePrice2] = useState(
    localStorage.getItem("price2") || ""
  );
  const [valuePrice3, setValuePrice3] = useState(
    localStorage.getItem("price3") || ""
  );
  const [clientName, setClientName] = useState("");
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);

  const getData = () => {
    axios.get(API_PATH + `main/room/${pk.id}/`).then((res) => {
      setData(res.data);
      setPrice30(res.data.room_details[0].price_30);
      setPrice50(res.data.room_details[0].price_50);
      setPrice100(res.data.room_details[0].price_100);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const changeClientName = (item_id) => {
    const nav = useNavigate();
    axios
      .patch(API_PATH + `main/room-update/${item_id}/`, {
        client_name: clientName,
      })
      .then((res) => {
        console.log(res.data);
        document.location.reload(true);
      });
  };

  const changePricePatch = (item_id) => {
    axios
      .patch(API_PATH + `main/room-update/${item_id}/`, {
        price_30: data.room_details[0].price_30 - valuePrice1,
      })
      .then((res) => {
        console.log(res.data);
        document.location.reload(true);
      });
  };

  const changePricePatch2 = (item_id) => {
    axios
      .patch(API_PATH + `main/room-update/${item_id}/`, {
        price_50: data.room_details[0].price_50 - valuePrice2,
      })
      .then((res) => {
        console.log(res.data);
        document.location.reload(true);
      });
  };

  const changePricePatch3 = (item_id) => {
    axios
      .patch(API_PATH + `main/room-update/${item_id}/`, {
        price_100: data.room_details[0].price_100 - valuePrice3,
      })
      .then((res) => {
        console.log(res.data);
        document.location.reload(true);
      });
  };
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

  const [modalPrice, setModalPrice] = useState(0);
  const [modalPriceTerrace, setModalPriceTerrace] = useState(0);
  const [firstPrice, setFirstPrice] = useState(0);
  const [month1, setMonth1] = useState(12);
  const [month1Price, setMonth1Price] = useState(0);
  const [month2, setMonth2] = useState();
  const [month2Price, setMonth2Price] = useState();
  const [month3, setMonth3] = useState();
  const [month3Price, setMonth3Price] = useState();
  return (
    <>
      <div className={`Price ${modal || modal2 ? "d-none" : ""}`}>
        <div className="container">
          <div className="col-12 d-flex justify-content-between export_btn_box">
            <Link to="/" className="export_btn">
              Назад
            </Link>
            <div onClick={() => setModal(true)} className="export_btn">
              Export PDF
            </div>
          </div>
          <div className="col-12 mt-5 d-flex justify-content-end">
            {data ? (
              <>
                <div className="row justify-content-between">
                  <div className="col-12 ">
                    <div className="home_name">прайс лист</div>
                  </div>
                  <div className="col-12 mb-5">
                    <div className="cat_box">
                      <div
                        onClick={() => setBar(2)}
                        className={`cat_main cat_main_line_1 ${
                          bar === 2 ? "active" : ""
                        }`}
                      >
                        30%
                      </div>
                      <div
                        onClick={() => setBar(3)}
                        className={`cat_main cat_main_line_2 ${
                          bar === 3 ? "active" : ""
                        }`}
                      >
                        50%
                      </div>
                      <div
                        onClick={() => setBar(4)}
                        className={`cat_main ${bar === 4 ? "active" : ""}`}
                      >
                        100%
                      </div>
                    </div>
                  </div>
                  <div className="col-5">
                    {bar === 2 ? (
                      <>
                        <div className="price_box">
                          <div className="pr_top">
                            <div className="pr_num_box">
                              {/* <div className="pr_num_h">Количество комнат:</div> */}
                              <div className="pr_num_h">Количество комнат:</div>
                              <div className="pr_num_p">
                                {data.room_details[0]
                                  ? data.room_details[0].count_rooms
                                  : ""}{" "}
                                x
                              </div>
                            </div>
                            <div className="pr_text">
                              <div className="pr_text_h">Общая площадь:</div>
                              <div className="pr_text_p">
                                {data.room_details
                                  ? data.room_details[0].full_area
                                  : ""}{" "}
                                м2
                              </div>
                            </div>
                            <div
                              className={`pr_text ${
                                data.room_details[0].terrace_area < 1
                                  ? "d-none"
                                  : ""
                              } `}
                            >
                              <div className="pr_text_h">Площадь Террасы:</div>
                              <div className="pr_text_p">
                                {data.room_details
                                  ? data.room_details[0].terrace_area
                                  : ""}{" "}
                                м2
                              </div>
                            </div>
                            <div className="pr_text">
                              <div className="pr_text_h">Цена:</div>
                              <div className="pr_text_p">
                                {(
                                  price30 *
                                    (data.room_details[0].full_area -
                                      data.room_details[0].terrace_area) +
                                  data.room_details[0].terrace_area *
                                    data.room_details[0].terrace_price_30
                                ).toLocaleString()}{" "}
                                $
                              </div>
                            </div>
                            <div className="pr_text">
                              <div className="pr_text_h">Цена за м2</div>
                              <div className="pr_text_p">
                                {price30.toLocaleString()} $
                              </div>
                            </div>
                            <div
                              className={`pr_text ${
                                data.room_details[0].terrace_area < 1
                                  ? "d-none"
                                  : ""
                              } `}
                            >
                              <div className="pr_text_h">
                                Цена за м2 террасы
                              </div>
                              <div className="pr_text_p">
                                {data.room_details[0].terrace_price_30.toLocaleString()}{" "}
                                $
                              </div>
                            </div>
                            <div className="pr_text_2">
                              <div className="pr_text_h_2">
                                Первоначыльный платеж:
                              </div>
                              <div className="pr_text_p_2">
                                {(
                                  (price30 *
                                    (data.room_details[0].full_area -
                                      data.room_details[0].terrace_area) +
                                    data.room_details[0].terrace_area *
                                      data.room_details[0].terrace_price_30) *
                                  0.3
                                ).toLocaleString()}{" "}
                                $
                              </div>
                              <div className="pr_text_h_2">Сумма остатка:</div>
                              <div className="pr_text_p_2">
                                {(
                                  price30 *
                                    (data.room_details[0].full_area -
                                      data.room_details[0].terrace_area) +
                                  data.room_details[0].terrace_area *
                                    data.room_details[0].terrace_price_30 -
                                  (price30 *
                                    (data.room_details[0].full_area -
                                      data.room_details[0].terrace_area) +
                                    data.room_details[0].terrace_area *
                                      data.room_details[0].terrace_price_30) *
                                    0.3
                                ).toLocaleString()}{" "}
                                ${" "}
                              </div>
                              <div className="pr_text_h_2">
                                Ежемесячно оплата:{" "}
                                <input
                                  className="pr_text_inp"
                                  onChange={(e) => setOy(e.target.value)}
                                  type="text"
                                  placeholder="oy"
                                />
                              </div>
                              <div className="pr_text_p_2">
                                {oy > 1
                                  ? Math.round(
                                      ((price30 *
                                        (data.room_details[0].full_area -
                                          data.room_details[0].terrace_area) +
                                        data.room_details[0].terrace_area *
                                          data.room_details[0]
                                            .terrace_price_30) *
                                        0.7) /
                                        oy
                                    ).toLocaleString()
                                  : ""}{" "}
                                $
                              </div>
                              <div className="pr_text_h_2">Cумма продажи:</div>
                              <div className="pr_text_p_2">
                                {" "}
                                <span>
                                  {(
                                    price30 *
                                      (data.room_details[0].full_area -
                                        data.room_details[0].terrace_area) +
                                    data.room_details[0].terrace_area *
                                      data.room_details[0].terrace_price_30
                                  ).toLocaleString()}{" "}
                                  $
                                </span>{" "}
                              </div>
                            </div>

                            {/* <div className="pr_text_3">
                        <div className="pr_text_h_3">
                          Доп. услуга (за ремонт):
                        </div>
                        <div className="pr_text_p_3">60 200 000  {" "}$</div>
                      </div> */}
                          </div>

                          <div className="pr_down">
                            <div className="pr_text_4">
                              <div className="pr_text_h_4">Адрес:</div>
                              <div className="pr_text_p_4">
                                111018, Ташкентский область, Ташкентский район,
                                ул. Куйи Кук-Терак 95
                              </div>
                            </div>
                            <div className="pr_text_4">
                              <div className="pr_text_h_4">Вебсайт:</div>
                              <div className="pr_text_p_4">
                                www.sanart-invest.com
                              </div>
                            </div>
                            <div className="pr_text_4">
                              <div className="pr_text_h_4">Колл-центр :</div>
                              <div className="pr_text_p_4">
                                + 998 (88) 113 00 50
                              </div>
                              <div className="pr_text_p_4">
                                + 998 (88) 202 00 05
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    ) : bar === 3 ? (
                      <>
                        <div className="price_box">
                          <div className="pr_top">
                            <div className="pr_num_box">
                              <div className="pr_num_h">Количество комнат:</div>
                              <div className="pr_num_p">
                                {data.room_details[0]
                                  ? data.room_details[0].count_rooms
                                  : ""}{" "}
                                x
                              </div>
                            </div>
                            <div className="pr_text">
                              <div className="pr_text_h">Общая площадь:</div>
                              <div className="pr_text_p">
                                {data.room_details
                                  ? data.room_details[0].full_area
                                  : ""}{" "}
                                м2
                              </div>
                            </div>
                            <div
                              className={`pr_text ${
                                data.room_details[0].terrace_area < 1
                                  ? "d-none"
                                  : ""
                              }`}
                            >
                              <div className="pr_text_h">Площадь Террасы:</div>
                              <div className="pr_text_p">
                                {data.room_details
                                  ? data.room_details[0].terrace_area
                                  : ""}{" "}
                                м2
                              </div>
                            </div>
                            <div className="pr_text">
                              <div className="pr_text_h">Цена:</div>
                              <div className="pr_text_p">
                                {(
                                  data.room_details[0].price_50 *
                                    (data.room_details[0].full_area -
                                      data.room_details[0].terrace_area) +
                                  data.room_details[0].terrace_area *
                                    data.room_details[0].terrace_price_50
                                ).toLocaleString()}{" "}
                                $
                              </div>
                            </div>
                            <div className="pr_text">
                              <div className="pr_text_h">Цена за м2</div>
                              <div className="pr_text_p">
                                {data.room_details[0].price_50.toLocaleString()}{" "}
                                $
                              </div>
                            </div>
                            <div
                              className={`pr_text ${
                                data.room_details[0].terrace_area < 1
                                  ? "d-none"
                                  : ""
                              }`}
                            >
                              <div className="pr_text_h">
                                Цена за м2 террасы
                              </div>
                              <div className="pr_text_p">
                                {data.room_details[0].terrace_price_50.toLocaleString()}{" "}
                                $
                              </div>
                            </div>
                            <div className="pr_text_2">
                              <div className="pr_text_h_2">
                                Первоначыльный платеж:
                              </div>
                              <div className="pr_text_p_2">
                                {(
                                  (data.room_details[0].price_50 *
                                    (data.room_details[0].full_area -
                                      data.room_details[0].terrace_area) +
                                    data.room_details[0].terrace_area *
                                      data.room_details[0].terrace_price_50) *
                                  0.5
                                ).toLocaleString()}{" "}
                                $
                              </div>
                              <div className="pr_text_h_2">Сумма остатка:</div>
                              <div className="pr_text_p_2">
                                {(
                                  (data.room_details[0].price_50 *
                                    (data.room_details[0].full_area -
                                      data.room_details[0].terrace_area) +
                                    data.room_details[0].terrace_area *
                                      data.room_details[0].terrace_price_50) *
                                  0.5
                                ).toLocaleString()}{" "}
                                ${" "}
                              </div>
                              <div className="pr_text_h_2">
                                Ежемесячно оплата:{" "}
                                <input
                                  className="pr_text_inp"
                                  onChange={(e) => setOy(e.target.value)}
                                  type="text"
                                  placeholder="oy"
                                />
                              </div>
                              <div className="pr_text_p_2">
                                {" "}
                                {oy > 1
                                  ? Math.round(
                                      ((data.room_details[0].price_50 *
                                        (data.room_details[0].full_area -
                                          data.room_details[0].terrace_area) +
                                        data.room_details[0].terrace_area *
                                          data.room_details[0]
                                            .terrace_price_50) *
                                        0.5) /
                                        oy
                                    ).toLocaleString()
                                  : ""}{" "}
                                $
                              </div>
                              <div className="pr_text_h_2">Cумма продажи:</div>
                              <div className="pr_text_p_2">
                                {" "}
                                <span>
                                  {(
                                    data.room_details[0].price_50 *
                                      (data.room_details[0].full_area -
                                        data.room_details[0].terrace_area) +
                                    data.room_details[0].terrace_area *
                                      data.room_details[0].terrace_price_50
                                  ).toLocaleString()}{" "}
                                  $
                                </span>{" "}
                              </div>
                            </div>

                            {/* <div className="pr_text_3">
                        <div className="pr_text_h_3">
                          Доп. услуга (за ремонт):
                        </div>
                        <div className="pr_text_p_3">60 200 000  {" "}$</div>
                      </div> */}
                          </div>

                          <div className="pr_down">
                            <div className="pr_text_4">
                              <div className="pr_text_h_4">Адрес:</div>
                              <div className="pr_text_p_4">
                                111018, Ташкентский область, Ташкентский район,
                                ул. Куйи Кук-Терак 95
                              </div>
                            </div>
                            <div className="pr_text_4">
                              <div className="pr_text_h_4">Вебсайт:</div>
                              <div className="pr_text_p_4">
                                www.sanart-invest.com
                              </div>
                            </div>
                            <div className="pr_text_4">
                              <div className="pr_text_h_4">Колл-центр :</div>
                              <div className="pr_text_p_4">
                                + 998 (88) 113 00 50
                              </div>
                              <div className="pr_text_p_4">
                                + 998 (88) 202 00 05
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    ) : bar === 4 ? (
                      <>
                        <div className="price_box">
                          <div className="pr_top">
                            <div className="pr_num_box">
                              <div className="pr_num_h">Количество комнат:</div>
                              <div className="pr_num_p">
                                {data.room_details[0]
                                  ? data.room_details[0].count_rooms
                                  : ""}{" "}
                                x
                              </div>
                            </div>
                            <div className="pr_text">
                              <div className="pr_text_h">Общая площадь:</div>
                              <div className="pr_text_p">
                                {data.room_details
                                  ? data.room_details[0].full_area
                                  : ""}{" "}
                                м2
                              </div>
                            </div>
                            <div
                              className={`pr_text ${
                                data.room_details[0].terrace_area < 1
                                  ? "d-none"
                                  : ""
                              }`}
                            >
                              <div className="pr_text_h">Площадь Террасы:</div>
                              <div className="pr_text_p">
                                {data.room_details
                                  ? data.room_details[0].terrace_area
                                  : ""}{" "}
                                м2
                              </div>
                            </div>
                            <div className="pr_text">
                              <div className="pr_text_h">Цена:</div>
                              <div className="pr_text_p">
                                {(
                                  data.room_details[0].price_100 *
                                    (data.room_details[0].full_area -
                                      data.room_details[0].terrace_area) +
                                  data.room_details[0].terrace_area *
                                    data.room_details[0].terrace_price_100
                                ).toLocaleString()}{" "}
                                $
                              </div>
                            </div>
                            <div className="pr_text">
                              <div className="pr_text_h">Цена за м2</div>
                              <div className="pr_text_p">
                                {data.room_details[0].price_100.toLocaleString()}{" "}
                                $
                              </div>
                            </div>
                            <div
                              className={`pr_text ${
                                data.room_details[0].terrace_area < 1
                                  ? "d-none"
                                  : ""
                              }`}
                            >
                              <div className="pr_text_h">
                                Цена за м2 террасы
                              </div>
                              <div className="pr_text_p">
                                {data.room_details[0].terrace_price_100.toLocaleString()}{" "}
                                $
                              </div>
                            </div>
                            <div className="pr_text_2">
                              <div className="pr_text_h_2">Cумма продажи:</div>
                              <div className="pr_text_p_2">
                                {" "}
                                <span>
                                  {(
                                    data.room_details[0].price_100 *
                                      (data.room_details[0].full_area -
                                        data.room_details[0].terrace_area) +
                                    data.room_details[0].terrace_area *
                                      data.room_details[0].terrace_price_100
                                  ).toLocaleString()}{" "}
                                  $
                                </span>{" "}
                              </div>
                            </div>

                            {/* <div className="pr_text_3">
                        <div className="pr_text_h_3">
                          Доп. услуга (за ремонт):
                        </div>
                        <div className="pr_text_p_3">60 200 000  {" "}$</div>
                      </div> */}
                          </div>

                          <div className="pr_down">
                            <div className="pr_text_4">
                              <div className="pr_text_h_4">Адрес:</div>
                              <div className="pr_text_p_4">
                                111018, Ташкентский область, Ташкентский район,
                                ул. Куйи Кук-Терак 95
                              </div>
                            </div>
                            <div className="pr_text_4">
                              <div className="pr_text_h_4">Вебсайт:</div>
                              <div className="pr_text_p_4">
                                www.sanart-invest.com
                              </div>
                            </div>
                            <div className="pr_text_4">
                              <div className="pr_text_h_4">Колл-центр :</div>
                              <div className="pr_text_p_4">
                                + 998 (88) 113 00 50
                              </div>
                              <div className="pr_text_p_4">
                                + 998 (88) 202 00 05
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="col-7 d-flex flex-column align-items-end">
                    <div className="pr_cat_box">
                      <div className="pr_cat_main">
                        <div className="pr_cat_main_h">Здание</div>
                        <div className="pr_cat_main_p">
                          {block ? block : ""}
                        </div>
                      </div>
                      <div className="pr_cat_main pr_cat_line">
                        <div className="pr_cat_main_h">подъезд</div>
                        <div className="pr_cat_main_p">
                          {podez ? podez : ""}
                        </div>
                      </div>
                      <div className="pr_cat_main">
                        <div className="pr_cat_main_h">Этаж</div>
                        <div className="pr_cat_main_p">{etaj ? etaj : ""}</div>
                      </div>
                      <div className="pr_cat_main pr_cat_line">
                        <div className="pr_cat_main_h">Дом</div>
                        <div className="pr_cat_main_p">№ {dom ? dom : ""}</div>
                      </div>
                      <div className="pr_cat_main">
                        <div className="pr_cat_main_h">Состояние</div>
                        <div className="pr_cat_main_p">Без ремонта</div>
                      </div>
                    </div>
                    <div className="pr_cat_img">
                      <img
                        className="mt-5"
                        src={
                          data.room_details ? data.room_details[0].image_1 : ""
                        }
                        alt=""
                      />
                      <img
                        className="mt-5"
                        src={
                          data.room_details ? data.room_details[0].image_2 : ""
                        }
                        alt=""
                      />
                    </div>
                  </div>

                  {/* <div className="col-12 d-flex justify-content-end">
                    <div className="pr_cl">
                      <div className="pr_cl_h">Уважаемый клиент:</div>
                      <div className="pr_cl_p">
                        {" "}
                        {data?.room_details[0]?.client_name ? (
                          data.room_details[0].client_name
                        ) : (
                          <>
                            <input
                              type="text"
                              value={clientName}
                              onChange={(e) => setClientName(e.target.value)}
                            />
                            <button
                              type="submit"
                              onClick={() =>
                                changeClientName(data.room_details[0].id)
                              }
                            >
                              отправить
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  </div> */}
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
      <div id="mySection">
        {modal ? (
          <>
            <div className="price_modal_box">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <button
                      className="price_back"
                      onClick={() => setModal(false)}
                    >
                      Назад
                    </button>
                  </div>
                  <div className="col-12">
                    <div className="modal_text_box">
                      <div className="text_modal_item">
                        <div className="modal_text_h active">
                          {" "}
                          {data?.room_details[0]?.full_area} m2
                        </div>
                      </div>
                      <div className="text_modal_item">
                        <div className="modal_text_h">цена за м2</div>
                        <div className="modal_text_input">
                          <input
                            type="text"
                            placeholder="цена за м2"
                            onChange={(e) => setModalPrice(e.target.value)}
                          />
                        </div>
                      </div>
                      <div
                        className={`text_modal_item ${
                          data?.room_details[0]?.terrace_area < 1
                            ? "d-none"
                            : ""
                        }`}
                      >
                        <div className="modal_text_h">цена за м2 террасе </div>
                        <div className="modal_text_input">
                          <input
                            type="text"
                            placeholder="цена за м2"
                            onChange={(e) =>
                              setModalTerracePrice(e.target.value)
                            }
                          />
                        </div>
                      </div>
                      <div className="text_modal_item">
                        <div className="modal_text_h">
                          Первоначaльный платеж:
                        </div>
                        <div className="modal_text_input">
                          <input
                            type="text"
                            value={firstPrice}
                            onChange={(e) => setFirstPrice(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="text_modal_item">
                        <div className="modal_text_h">Сумма остатка:</div>
                        <div className="modal_text_input">
                          {Math.round(
                            (data?.room_details[0]?.full_area -
                              data?.room_details[0]?.terrace_area) *
                              modalPrice +
                              modalPriceTerrace *
                                data?.room_details[0]?.terrace_area -
                              firstPrice
                          )}
                        </div>
                      </div>

                      <div className="text_modal_item">
                        <div className="modal_text_h">Ежемесячно оплата:</div>
                        <div className="modal_text_input_box d-flex justify-content-between align-items-center">
                          <input
                            value={month1}
                            type="text"
                            placeholder="Month"
                            onChange={(e) => setMonth1(e.target.value)}
                          />
                          <input
                            type="text"
                            placeholder="Summa"
                            value={month1Price}
                            onChange={(e) => setMonth1Price(e.target.value)}
                          />
                        </div>

                        <div className="modal_text_input_box d-flex justify-content-between align-items-center">
                          <input
                            type="text"
                            placeholder="Month"
                            value={month2}
                            onChange={(e) => setMonth2(e.target.value)}
                          />
                          <input
                            type="text"
                            placeholder="Summa"
                            value={month2Price}
                            onChange={(e) => setMonth2Price(e.target.value)}
                          />
                        </div>

                        <div className="modal_text_input_box d-flex justify-content-between align-items-center">
                          <input
                            type="text"
                            value={month3}
                            placeholder="Month"
                            onChange={(e) => setMonth3(e.target.value)}
                          />
                          <input
                            type="text"
                            placeholder="Summa"
                            value={month3Price}
                            onChange={(e) => setMonth3Price(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="text_modal_item">
                        <div className="modal_item_h">Client Name</div>
                        <input
                          type="text"
                          value={clientName}
                          onChange={(e) => setClientName(e.target.value)}
                        />
                      </div>

                      <div className="text_modal_button">
                        <button
                          className="price_back mt-5"
                          onClick={() => {
                            setModal2(true), setModal(false);
                          }}
                        >
                          Подвердить
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
      <div id="mySection">
        {modal2 ? (
          <>
            <div id="example">
              <div className="box wide hidden-on-narrow d-flex justify-content-between">
                <div className="box-col">
                  <Button
                    primary={true}
                    onClick={() => {
                      setModal2(false);
                    }}
                  >
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
                              <div className="in_top_item_p">{block}</div>
                            </div>
                            <div className="in_top_item ">
                              <div className="in_top_item_h">подъезд</div>
                              <div className="in_top_item_p">{podez}</div>
                            </div>
                            <div className="in_top_item">
                              <div className="in_top_item_h">Этаж</div>
                              <div className="in_top_item_p">{etaj}</div>
                            </div>
                            <div className="in_top_item ">
                              <div className="in_top_item_h">Дом</div>
                              <div className="in_top_item_p">№ {dom}</div>
                            </div>
                            <div className="in_top_item">
                              <div className="in_top_item_h">Состояние</div>
                              <div className="in_top_item_p">Без ремонта</div>
                            </div>
                          </div>
                        </div>
                        <img
                          className="in_logo_2"
                          src="/img/logo_2.png"
                          alt=""
                        />
                      </div>

                      <div className="in_box_text">
                        <div className="in_box_img">
                          <div className="in_box_images w-100">
                            <img
                              className="in_box_in_img"
                              src={data?.room_details[0]?.image_2}
                              alt=""
                            />
                            <img
                              className="in_box_in_img2"
                              src={data?.room_details[0]?.image_1}
                              alt=""
                            />
                          </div>
                          <div className="in_box_text_2">
                            <div className="in_text_2_h">Адрес:</div>
                            <div className="in_text_2_p_2">
                              {" "}
                              111018, Ташкентский область, Ташкентский район,
                              ул. Куйи Кук-Терак 95
                            </div>
                            <div className="in_text_2_h">Колл-центр :</div>
                            <div className="in_text_2_p">
                              + 998 (88) 113 00 50
                            </div>
                            <div className="in_text_2_p">
                              + 998 (88) 202 00 05
                            </div>
                            <div className="in_text_2_h">Уважаемый клиент:</div>
                            <div className="in_text_2_p">
                              {clientName
                                ? clientName
                                : "___________________________"}
                            </div>
                            {/* {bar === 10 ? (
                              <></>
                            ) :  (
                              <>
                                <div className="in_text_2_h">
                                  Уважаемый клиент:
                                </div>
                                <div className="in_text_2_p">
                                  {data?.room_details[0]?.client_name}
                                </div>
                              </>
                            )} */}
                          </div>
                        </div>

                        <div className="in_text">
                          <div className="in_text_main">
                            <div className="in_text_h">Количество комнат:</div>
                            <div className="in_text_p">
                              {data.room_details[0]
                                ? data.room_details[0].count_rooms
                                : ""}{" "}
                              x
                            </div>
                            <div className="in_text_h">Общая площадь:</div>
                            <div className="in_text_p in_text_p_active">
                              {data.room_details
                                ? data.room_details[0].full_area
                                : ""}{" "}
                              м2
                            </div>
                            <div
                              className={`in_text_h ${
                                data.room_details[0].terrace_area < 1
                                  ? "d-none"
                                  : ""
                              }`}
                            >
                              Площадь Террасы:
                            </div>
                            <div
                              className={`in_text_p ${
                                data.room_details[0].terrace_area < 1
                                  ? "d-none"
                                  : ""
                              }`}
                            >
                              {data.room_details
                                ? data.room_details[0].terrace_area
                                : ""}{" "}
                              м2
                            </div>
                            <div className="in_text_h">Цена за м2</div>
                            <div className="in_text_p">{modalPrice} $</div>
                            <div
                              className={`in_text_h ${
                                data.room_details[0].terrace_area < 1
                                  ? "d-none"
                                  : ""
                              }`}
                            >
                              Цена за м2 террасы
                            </div>
                            <div
                              className={`in_text_p ${
                                data.room_details[0].terrace_area < 1
                                  ? "d-none"
                                  : ""
                              }`}
                            >
                              {" "}
                              {data.room_details[0].terrace_price_30.toLocaleString()}{" "}
                              $
                            </div>
                          </div>
                          <div className="in_text_main_2">
                            <div className="in_text_h_2">
                              Первоначыльный платеж:
                            </div>
                            <div className="in_text_p_2">
                              {" "}
                              {Math.round(firstPrice).toLocaleString()} $
                            </div>
                            <div className="in_text_h_2">Сумма остатка:</div>
                            <div className="in_text_p_2">
                              {Math.round(
                                (data?.room_details[0]?.full_area -
                                  data?.room_details[0]?.terrace_area) *
                                  modalPrice +
                                  modalPriceTerrace *
                                    data?.room_details[0]?.terrace_area -
                                  firstPrice
                              ).toLocaleString()}{" "}
                              ${" "}
                            </div>
                            <div className="in_text_h_2">
                              Ежемесячно оплата:
                            </div>
                            {month1 > 1 && month1Price > 1 ? (
                              <>
                                <div className="in_text_p_2 mt-2">
                                  {month1} месяц - {month1Price} $
                                </div>
                              </>
                            ) : (
                              <> - </>
                            )}
                            {month2 > 1 && month2Price > 1 ? (
                              <>
                                <div className="in_text_p_2 mt-2">
                                  {month2} месяц - {month2Price} $
                                </div>
                              </>
                            ) : (
                              <> </>
                            )}
                            {month3 > 1 && month3Price > 1 ? (
                              <>
                                <div className="in_text_p_2 mt-2">
                                  {month3} месяц - {month3Price} $
                                </div>
                              </>
                            ) : (
                              <> </>
                            )}
                            <div className="in_text_h_2">Cумма продажи:</div>
                            <div className="in_text_p_2 in_text_p_3">
                              {" "}
                              {(
                                modalPrice *
                                  (data.room_details[0].full_area -
                                    data.room_details[0].terrace_area) +
                                data.room_details[0].terrace_area *
                                  modalPriceTerrace
                              ).toLocaleString()}{" "}
                              $
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </PDFExport>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Price;
