import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_PATH } from "../tools/constants";

const Price = () => {
  const pk = useParams();
  const [bar, setBar] = useState(1);
  const [data, setData] = useState();
  const [podez, setPodez] = useState(localStorage.getItem("podez") || "");
  const [block, setBlock] = useState(localStorage.getItem("block") || "");
  const [etaj, setEtaj] = useState(localStorage.getItem("etaj") || "");
  const [dom, setDom] = useState(localStorage.getItem("dom") || "");
  const [skidki, setSkidki] = useState();
  const [oy, setOy] = useState(24);

  const getData = () => {
    axios.get(API_PATH + `main/room/${pk.id}/`).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  };

  const getSkidki = () => {
    axios.get(API_PATH + "main/skidki/").then((res) => {
      setSkidki(res.data);
    });
  };

  useEffect(() => {
    getData();
    getSkidki();
  }, []);

  return (
    <>
      <div className="Price">
        <div className="container">
          {data ? (
            <>
              <div className="row justify-content-between">
                <div className="col-12 ">
                  <div className="home_name">прайс лист</div>
                </div>
                <div className="col-12 mb-5">
                  <div className="cat_box">
                    <div onClick={() => setBar(1)} className="cat_main ">
                      0%
                    </div>
                    <div
                      onClick={() => setBar(2)}
                      className="cat_main cat_main_line_1 active"
                    >
                      30%
                    </div>
                    <div
                      onClick={() => setBar(3)}
                      className="cat_main cat_main_line_2"
                    >
                      50%
                    </div>
                    <div onClick={() => setBar(4)} className="cat_main">
                      100%
                    </div>
                  </div>
                </div>
                <div className="col-4 d-flex">
                  {bar === 1 ? (
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

                          <div className="pr_text">
                            <div className="pr_text_h">Цена:</div>
                            <div className="pr_text_p">
                              {data.room_details[0].price_0 *
                                (data.room_details[0].full_area -
                                  data.room_details[0].terrace_area) +
                                data.room_details[0].terrace_area *
                                  data.room_details[0].terrace_price_0}
                              uzs
                            </div>
                          </div>
                          <div className="pr_text">
                            <div className="pr_text_h">
                              Цена за м2 квартиры без скидка
                            </div>
                            <div className="pr_text_p">
                              {data.room_details[0].price_0}
                              uzs
                            </div>
                          </div>
                          <div className="pr_text">
                            <div className="pr_text_h">Цена за м2 террасы</div>
                            <div className="pr_text_p">
                              {data.room_details[0].terrace_price_0} uzs
                            </div>
                          </div>
                          <div className="pr_text_2">
                            <div className="pr_text_h_2">
                              Первоначыльный платеж:
                            </div>
                            <div className="pr_text_p_2">0 uzs</div>
                            <div className="pr_text_h_2">Сумма остатка:</div>
                            <div className="pr_text_p_2">
                              {skidki[0]?.percentage > 0
                                ? (data.room_details[0].price_0 -
                                    skidki[0]?.percentage) *
                                    (data.room_details[0].full_area -
                                      data.room_details[0].terrace_area) +
                                  data.room_details[0].terrace_area *
                                    data.room_details[0].terrace_price_0
                                : ""}{" "}
                              uzs{" "}
                            </div>
                            <div className="pr_text_h_2">Сумма скидки:</div>
                            <div className="pr_text_p_2">
                              {skidki[0].percentage} uzs{" "}
                            </div>
                            <div className="pr_text_h_2">
                              Ежемесячно оплата:{" "}
                              <input
                                onChange={(e) => setOy(e.target.value)}
                                type="text"
                                placeholder="oy"
                              />
                            </div>
                            <div className="pr_text_p_2">
                              {oy > 1
                                ? (skidki[0]?.percentage > 0
                                    ? (data.room_details[0].price_0 -
                                        skidki[0]?.percentage) *
                                        (data.room_details[0].full_area -
                                          data.room_details[0].terrace_area) +
                                      data.room_details[0].terrace_area *
                                        data.room_details[0].terrace_price_0
                                    : "") / oy
                                : ""}{" "}
                              uzs
                            </div>
                            <div className="pr_text_h_2">
                              Цена за 1 м2 скидкe:
                            </div>
                            <div className="pr_text_p_2">
                              {data.room_details[0].price_0 -
                                skidki[0].percentage}{" "}
                              uzs{" "}
                            </div>
                            <div className="pr_text_h_2">Cумма продажи:</div>
                            <div className="pr_text_p_2">
                              {" "}
                              <span>
                                {(data.room_details[0].price_0 -
                                  skidki[0]?.percentage) *
                                  (data.room_details[0].full_area -
                                    data.room_details[0].terrace_area) +
                                  data.room_details[0].terrace_area *
                                    data.room_details[0].terrace_price_0}{" "}
                                uzs
                              </span>{" "}
                            </div>
                          </div>

                          {/* <div className="pr_text_3">
                        <div className="pr_text_h_3">
                          Доп. услуга (за ремонт):
                        </div>
                        <div className="pr_text_p_3">60 200 000 uzs</div>
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
                  ) : bar === 2 ? (
                    <>
                    
                    </>
                  ) : bar === 3 ? (
                    <></>
                  ) : (
                    <></>
                  )}
                </div>
                <div className="col-8">
                  <div className="pr_cat_box">
                    <div className="pr_cat_main">
                      <div className="pr_cat_main_h">Здание</div>
                      <div className="pr_cat_main_p">{block ? block : ""}</div>
                    </div>
                    <div className="pr_cat_main pr_cat_line">
                      <div className="pr_cat_main_h">подъезд</div>
                      <div className="pr_cat_main_p">{podez ? podez : ""}</div>
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
                <div className="col-12 d-flex justify-content-end">
                  <div className="pr_cl">
                    <div className="pr_cl_h">Уважаемый клиент:</div>
                    <div className="pr_cl_p">
                      {" "}
                      {data.room_details
                        ? data.room_details[0].client_name
                        : ""}
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default Price;
