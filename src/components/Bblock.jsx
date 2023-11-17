import axios from "axios";
import { useEffect, useState } from "react";
import { API_PATH } from "../tools/constants";

const BBlock = () => {
  const [floor, setFloor] = useState([]);

  const getFloor = () => {
    axios.get(API_PATH + "main/floor/?block_id=2").then((res) => {
      setFloor(res.data);
    });
  };
  useEffect(() => {
    getFloor();
    console.log(floor);
  }, []);

  const link = (a, b, c, d, e) => {};

  return (
    <>
      <div className="ABlock">
        <div className="container">
          {floor &&
            floor.map((item, index) => (
              <>
                <div key={index} className="row">
                  <div className="col-12">
                    <div className="a_num">{item.name}</div>
                  </div>
                  {item.floor_rooms ? (
                    <>
                      <div className="col-12">
                        <div className="a_box">
                          <div className="a_box_1">
                            <div
                              onClick={() =>
                                link(
                                  item.block,
                                  "1",
                                  item.name,
                                  item.floor_rooms[0]?.room_number
                                )
                              }
                              className={`a_box_1_main_1 ${
                                item.floor_rooms[0]?.status_room ==
                                "бронирование"
                                  ? "active"
                                  : item.floor_rooms[0]?.status_room ==
                                    "продано"
                                  ? "activee"
                                  : ""
                              }`}
                            >
                              {item.floor_rooms[0]?.room_number}
                            </div>
                            <div
                              onClick={() =>
                                link(
                                  item.block,
                                  "1",
                                  item.name,
                                  item.floor_rooms[1]?.room_number
                                )
                              }
                              className={`a_box_1_main_1 ${
                                item.floor_rooms[1]?.status_room ==
                                "бронирование"
                                  ? "active"
                                  : item.floor_rooms[1]?.status_room ==
                                    "продано"
                                  ? "activee"
                                  : ""
                              }`}
                            >
                              {item.floor_rooms[1]?.room_number}
                            </div>
                          </div>
                          <div className="a_box_1">
                            <div
                              onClick={() =>
                                link(
                                  item.block,
                                  "1",
                                  item.name,
                                  item.floor_rooms[3]?.room_number
                                )
                              }
                              className={`a_box_1_main_1 ${
                                item.floor_rooms[3]?.status_room ==
                                "бронирование"
                                  ? "active"
                                  : item.floor_rooms[3]?.status_room ==
                                    "продано"
                                  ? "activee"
                                  : ""
                              }`}
                            >
                              {item.floor_rooms[3]?.room_number}
                            </div>
                            <div className="a_box_1_main_3">LIFT</div>
                          </div>
                          <div className="a_box_1">
                            <div
                              onClick={() =>
                                link(
                                  item.block,
                                  "1",
                                  item.name,
                                  item.floor_rooms[5]?.room_number
                                )
                              }
                              className={`a_box_1_main_1 ${
                                item.floor_rooms[5]?.status_room ==
                                "бронирование"
                                  ? "active"
                                  : item.floor_rooms[5]?.status_room ==
                                    "продано"
                                  ? "activee"
                                  : ""
                              }`}
                            >
                              {item.floor_rooms[5]?.room_number}
                            </div>
                            <div
                              onClick={() =>
                                link(
                                  item.block,
                                  "1",
                                  item.name,
                                  item.floor_rooms[6]?.room_number
                                )
                              }
                              className={`a_box_1_main_1 ${
                                item.floor_rooms[6]?.status_room ==
                                "бронирование"
                                  ? "active"
                                  : item.floor_rooms[6]?.status_room ==
                                    "продано"
                                  ? "activee"
                                  : ""
                              }`}
                            >
                              {item.floor_rooms[6]?.room_number}
                            </div>
                          </div>

                          <div className="a_box_1">
                            <div
                              onClick={() =>
                                link(
                                  item.block,
                                  "1",
                                  item.name,
                                  item.floor_rooms[7]?.room_number
                                )
                              }
                              className={`a_box_1_main_2 ${
                                item.floor_rooms[7]?.status_room ==
                                "бронирование"
                                  ? "active"
                                  : item.floor_rooms[7]?.status_room ==
                                    "продано"
                                  ? "activee"
                                  : ""
                              }`}
                            >
                              {item.floor_rooms[7]?.room_number}
                            </div>
                          </div>
                          <div className="a_box_1">
                            <div
                              onClick={() =>
                                link(
                                  item.block,
                                  "1",
                                  item.name,
                                  item.floor_rooms[8]?.room_number
                                )
                              }
                              className={`a_box_1_main_2 ${
                                item.floor_rooms[8]?.status_room ==
                                "бронирование"
                                  ? "active"
                                  : item.floor_rooms[8]?.status_room ==
                                    "продано"
                                  ? "activee"
                                  : ""
                              }`}
                            >
                              {item.floor_rooms[8]?.room_number}
                            </div>
                          </div>
                          <div className="a_box_1">
                            <div
                              onClick={() =>
                                link(
                                  item.block,
                                  "1",
                                  item.name,
                                  item.floor_rooms[9]?.room_number
                                )
                              }
                              className={`a_box_1_main_1 ${
                                item.floor_rooms[9]?.status_room ==
                                "бронирование"
                                  ? "active"
                                  : item.floor_rooms[9]?.status_room ==
                                    "продано"
                                  ? "activee"
                                  : ""
                              }`}
                            >
                              {item.floor_rooms[9]?.room_number}
                            </div>{" "}
                            <div
                              onClick={() =>
                                link(
                                  item.block,
                                  "1",
                                  item.name,
                                  item.floor_rooms[10]?.room_number
                                )
                              }
                              className={`a_box_1_main_1 ${
                                item.floor_rooms[10]?.status_room ==
                                "бронирование"
                                  ? "active"
                                  : item.floor_rooms[10]?.status_room ==
                                    "продано"
                                  ? "activee"
                                  : ""
                              }`}
                            >
                              {item.floor_rooms[10]?.room_number}
                            </div>
                          </div>
                          <div className="a_box_1">
                            <div
                              onClick={() =>
                                link(
                                  item.block,
                                  "1",
                                  item.name,
                                  item.floor_rooms[11]?.room_number
                                )
                              }
                              className={`a_box_1_main_1 ${
                                item.floor_rooms[11]?.status_room ===
                                "бронирование"
                                  ? "active"
                                  : item.floor_rooms[11]?.status_room ===
                                    "продано"
                                  ? "activee"
                                  : ""
                              }`}
                            >
                              {item.floor_rooms[11]?.room_number}
                            </div>
                            <div className="a_box_1_main_3">LIFT</div>
                          </div>
                          <div className="a_box_1">
                            <div
                              onClick={() =>
                                link(
                                  item.block,
                                  "1",
                                  item.name,
                                  item.floor_rooms[4]?.room_number
                                )
                              }
                              className={`a_box_1_main_1 ${
                                item.floor_rooms[4]?.status_room ==
                                "бронирование"
                                  ? "active"
                                  : item.floor_rooms[4]?.status_room ==
                                    "продано"
                                  ? "activee"
                                  : ""
                              }`}
                            >
                              {item.floor_rooms[4]?.room_number}
                            </div>{" "}
                            <div
                              onClick={() =>
                                link(
                                  item.block,
                                  "1",
                                  item.name,
                                  item.floor_rooms[2]?.room_number
                                )
                              }
                              className={`a_box_1_main_1 ${
                                item.floor_rooms[2]?.status_room ==
                                "бронирование"
                                  ? "active"
                                  : item.floor_rooms[2]?.status_room ==
                                    "продано"
                                  ? "activee"
                                  : ""
                              }`}
                            >
                              {item.floor_rooms[2]?.room_number}
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </>
            ))}
        </div>
      </div>
    </>
  );
};

export default BBlock;
