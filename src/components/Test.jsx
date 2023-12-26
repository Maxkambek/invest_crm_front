import {} from "react";

const Price = () => {
  return (
    <>
      <div className="Price">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-12 ">
              <div className="home_name">прайс лист</div>
            </div>
            <div className="col-12 mb-5">
              <div className="cat_box">
                <div className="cat_main ">0%</div>
                <div className="cat_main cat_main_line_1 active">30%</div>
                <div className="cat_main cat_main_line_2">50%</div>
                <div className="cat_main">100%</div>
              </div>
            </div>
            <div className="col-4 d-flex">
              <div className="price_box">
                <div className="pr_top">
                  <div className="pr_num_box">
                    <div className="pr_num_h">Количество комнат:</div>
                    <div className="pr_num_p">2х</div>
                  </div>
                  <div className="pr_text">
                    <div className="pr_text_h">Общая площадь:</div>
                    <div className="pr_text_p">60м2</div>
                  </div>
                  <div className="pr_text">
                    <div className="pr_text_h">Цена:</div>
                    <div className="pr_text_p">636 000 000 uzs</div>
                  </div>
                  <div className="pr_text">
                    <div className="pr_text_h">Цена за 1 м2:</div>
                    <div className="pr_text_p">8 400 000 uzs</div>
                  </div>
                  <div className="pr_text_2">
                    <div className="pr_text_h_2">Первоначыльный платеж:</div>
                    <div className="pr_text_p_2">317 205 000 uzs</div>
                    <div className="pr_text_h_2">Сумма остатка:</div>
                    <div className="pr_text_p_2">286 995 000 uzs </div>
                    <div className="pr_text_h_2">Ежемесячно оплата: </div>
                    <div className="pr_text_p_2">317 205 000 uzs</div>
                    <div className="pr_text_h_2">Сумма скидки:</div>
                    <div className="pr_text_p_2">31 800 000 uzs (0%) </div>
                    <div className="pr_text_h_2">Цена за 1 м2 скидкe:</div>
                    <div className="pr_text_p_2">31 800 000 uzs (0%) </div>
                    <div className="pr_text_h_2">Cумма продажи:</div>
                    <div className="pr_text_p_2">
                      {" "}
                      <span>31 800 000 uzs</span>{" "}
                    </div>
                  </div>
                  <div className="pr_text_3">
                    <div className="pr_text_h_3">Доп. услуга (за ремонт):</div>
                    <div className="pr_text_p_3">60 200 000 uzs</div>
                  </div>
                </div>

                <div className="pr_down">
                  <div className="pr_text_4">
                    <div className="pr_text_h_4">Адрес:</div>
                    <div className="pr_text_p_4">
                      111018, Ташкентский область, Ташкентский район, ул. Куйи
                      Кук-Терак 95
                    </div>
                  </div>
                  <div className="pr_text_4">
                    <div className="pr_text_h_4">Вебсайт:</div>
                    <div className="pr_text_p_4">www.sanart-invest.com</div>
                  </div>
                  <div className="pr_text_4">
                    <div className="pr_text_h_4">Колл-центр :</div>
                    <div className="pr_text_p_4">+ 998 (88) 113 00 50</div>
                    <div className="pr_text_p_4">+ 998 (88) 202 00 05</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-8">
              <div className="pr_cat_box">
                <div className="pr_cat_main">
                  <div className="pr_cat_main_h">Здание</div>
                  <div className="pr_cat_main_p">1</div>
                </div>
                <div className="pr_cat_main pr_cat_line">
                  <div className="pr_cat_main_h">подъезд</div>
                  <div className="pr_cat_main_p">1</div>
                </div>
                <div className="pr_cat_main">
                  <div className="pr_cat_main_h">Этаж</div>
                  <div className="pr_cat_main_p">1</div>
                </div>
                <div className="pr_cat_main pr_cat_line">
                  <div className="pr_cat_main_h">Дом</div>
                  <div className="pr_cat_main_p">№ 12</div>
                </div>
                <div className="pr_cat_main">
                  <div className="pr_cat_main_h">Состояние</div>
                  <div className="pr_cat_main_p">Без ремонта</div>
                </div>
              </div>
              <div className="pr_cat_img">
                <img className="mt-5" src="/img/1.jpg" alt="" />
                <img className="mt-5" src="/img/2.jpg" alt="" />
              </div>
            </div>
            <div className="col-12 d-flex justify-content-end">
              <div className="pr_cl">
                <div className="pr_cl_h">Уважаемый клиент:</div>
                <div className="pr_cl_p">Mardonov Abdulaziz</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Price;
