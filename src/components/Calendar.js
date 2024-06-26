import React from "react";
import Last from "../images/Stat/last.svg";
import Next from "../images/Stat/next.svg";

const Calendar = ({ props }) => {
  return (
    <div
      className={`${props} dropdown-content absolute z-10 left-0 
      top-[93px] size-[300px] px-2 bg-[#FBEFF2] rounded-b-xl`}
    >
      <div
        className="flex justify-between h-[40px] 
      bg-[#F3CED7] items-center px-2 rounded"
      >
        <p className="font-proMedium text-[12px]">Tháng 02/2022 </p>
        <div className="flex gap-1">
          <button>
            <img src={Last} alt="" />
          </button>
          <button>
            <img src={Next} alt="" />
          </button>
        </div>
      </div>
      <div>
        <table className="w-full table-fixed ">
          <thead>
            <tr className="text-[12px] font-proMedium text-[#5E6278]">
              <th scope="col" className="size-[40px]">
                M
              </th>
              <th scope="col">T</th>
              <th scope="col">W</th>
              <th scope="col">T</th>
              <th scope="col">F</th>
              <th scope="col">S</th>
              <th scope="col">S</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-[12px] font-pro text-[#B5B5C3] size-[26px] text-center">
              <td>24</td>
              <td>25</td>
              <td>26</td>
              <td>27</td>
              <td>28</td>
              <td>29</td>
              <td className="text-[#5E6278]">1</td>
            </tr>
            <tr
              className="text-[12px] font-pro 
                text-[#5E6278] size-[26px] text-center"
            >
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
              <td>7</td>
              <td>8</td>
            </tr>
            <tr
              className="text-[12px] font-pro 
                text-[#5E6278] size-[26px] text-center"
            >
              <td>9</td>
              <td>10</td>
              <td>11</td>
              <td>12</td>
              <td>13</td>
              <td>14</td>
              <td>15</td>
            </tr>
            <tr
              className="text-[12px] font-pro 
                text-[#5E6278] size-[26px] text-center"
            >
              <td>16</td>
              <td>17</td>
              <td>18</td>
              <td>19</td>
              <td>20</td>
              <td>21</td>
              <td>22</td>
            </tr>
            <tr
              className="text-[12px] font-pro 
                text-[#5E6278] size-[26px] text-center"
            >
              <td>23</td>
              <td>24</td>
              <td>25</td>
              <td>26</td>
              <td>27</td>
              <td>28</td>
              <td>29</td>
            </tr>
            <tr className="text-[12px] font-pro size-[26px] text-center text-[#B5B5C3]">
              <td className="text-[#5E6278]">30</td>
              <td className="text-[#5E6278]">31</td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
            </tr>
          </tbody>
        </table>
      </div>
      <button
        className="btn w-full text-white font-proMedium text-[16px]
    bg-gradient-to-t from-[#EF586B] to-[#D9112A]"
      >
        Xác nhận
      </button>
    </div>
  );
};

export default Calendar;
