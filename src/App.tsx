import imgImage10 from "figma:asset/5a2a2d9c959c51a51969c24aad95d84c2c205288.png";

// API Data Interface - All dynamic content that can be populated via API
interface BookingData {
  // Customer Information
  customerName: string;
  coupleNames: string;
  email: string;
  phone: string;
  reservationDate: string;
  
  // Shoot Details
  shootDate: string;
  shootTime: string;
  sceneCount: number;
  finalCuts: number;
  shootTimeMinutes: number;
  
  // Package Information
  packageName: string;
  scenes: string[];
  
  // Options
  options: Array<{
    label: string;
    checked: boolean;
  }>;
  
  // Pricing
  totalPrice: number;
  deposit: number;
  balance: number;
  
  // Bank Information
  bankInfo: {
    name: string;
    account: string;
  };
  
  // Image
  productImage?: string;
}

// Mock data that would typically come from an API
const mockBookingData: BookingData = {
  customerName: "홍길동",
  coupleNames: "Yoonho & Yoonjoo",
  email: "gildonghong@gmail.com",
  phone: "010-1234-5678",
  reservationDate: "2025.08.23",
  
  shootDate: "2025/09/30",
  shootTime: "10:30",
  sceneCount: 5,
  finalCuts: 10,
  shootTimeMinutes: 90,
  
  packageName: "Baby.Essential",
  scenes: [
    "[50일] 베이비",
    "누드 단독",
    "한복 단독",
    "가족",
    "엄마+아이",
    "아빠+아이"
  ],
  
  options: [
    { label: "컨셉추가 (+10만/씬)", checked: false },
    { label: "인원추가 (+10만/인)", checked: false },
    { label: "쌍둥이 돌∙백일 촬영 (+30만)", checked: false },
    { label: "생화 화관 (5만)", checked: false },
    { label: "배송 - 앨범∙액자 신규주문시 (+3,500)", checked: false }
  ],
  
  totalPrice: 1200000,
  deposit: 200000,
  balance: 1000000,
  
  bankInfo: {
    name: "KB국민은행",
    account: "462-20-2014-23372 메리모먼트"
  }
};

function Titles2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-end left-[41px] text-nowrap top-[122px] whitespace-pre" data-name="titles2">
      <p className="font-['Radio_Canada_Big',_sans-serif] leading-[14px] relative shrink-0 text-[#313133] text-[14px]" style={{ fontWeight: 700 }}>DATE</p>
      <p className="font-['Noto_Sans_KR',_sans-serif] leading-[12px] not-italic relative shrink-0 text-[#6d6f72] text-[6px] tracking-[-0.12px]" style={{ fontWeight: 500 }}>촬영일자</p>
    </div>
  );
}

function Titles3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-end left-[41px] text-nowrap top-[167px] whitespace-pre" data-name="titles2">
      <p className="font-['Radio_Canada_Big',_sans-serif] leading-[14px] relative shrink-0 text-[#313133] text-[14px]" style={{ fontWeight: 700 }}>TIME</p>
      <p className="font-['Noto_Sans_KR',_sans-serif] leading-[12px] not-italic relative shrink-0 text-[#6d6f72] text-[6px] tracking-[-0.12px]" style={{ fontWeight: 500 }}>촬영시간</p>
    </div>
  );
}

function Titles4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-end left-[326px] text-nowrap top-[352px] whitespace-pre" data-name="titles2">
      <p className="font-['Montserrat',_sans-serif] leading-[14px] relative shrink-0 text-[#313133] text-[14px]" style={{ fontWeight: 700 }}>SHOOT TIME</p>
      <p className="font-['Noto_Sans_KR',_sans-serif] leading-[12px] not-italic relative shrink-0 text-[#6d6f72] text-[6px] tracking-[-0.12px]" style={{ fontWeight: 500 }}>촬영시간(분)</p>
    </div>
  );
}

function Titles5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-end left-[326px] text-nowrap top-[288px] whitespace-pre" data-name="titles2">
      <p className="font-['Montserrat',_sans-serif] leading-[14px] relative shrink-0 text-[#313133] text-[14px]" style={{ fontWeight: 700 }}>FINAL CUTS</p>
      <p className="font-['Noto_Sans_KR',_sans-serif] leading-[12px] not-italic relative shrink-0 text-[#6d6f72] text-[6px] tracking-[-0.12px]" style={{ fontWeight: 500 }}>최종 보정컷</p>
    </div>
  );
}

function Titles6() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-end left-[326px] text-nowrap top-[593px] whitespace-pre" data-name="titles2">
      <p className="font-['Montserrat',_sans-serif] leading-[14px] relative shrink-0 text-[#313133] text-[14px]" style={{ fontWeight: 700 }}>PRICE</p>
      <p className="font-['Noto_Sans_KR',_sans-serif] leading-[12px] not-italic relative shrink-0 text-[#6d6f72] text-[6px] tracking-[-0.12px]" style={{ fontWeight: 500 }}>금액</p>
    </div>
  );
}

function Titles7() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-end left-[326px] text-nowrap top-[413px] whitespace-pre" data-name="titles2">
      <p className="font-['Montserrat',_sans-serif] leading-[14px] relative shrink-0 text-[#313133] text-[14px]" style={{ fontWeight: 700 }}>OPTIONS</p>
      <p className="font-['Noto_Sans_KR',_sans-serif] leading-[12px] not-italic relative shrink-0 text-[#6d6f72] text-[6px] tracking-[-0.12px]" style={{ fontWeight: 500 }}>촬영옵션</p>
    </div>
  );
}

function Titles8() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-end left-[326px] text-nowrap top-[119px] whitespace-pre" data-name="titles2">
      <p className="font-['Montserrat',_sans-serif] leading-[14px] relative shrink-0 text-[#313133] text-[14px]" style={{ fontWeight: 700 }}>SCENE</p>
      <p className="font-['Noto_Sans_KR',_sans-serif] leading-[12px] not-italic relative shrink-0 text-[#6d6f72] text-[6px] tracking-[-0.12px]" style={{ fontWeight: 500 }}>컨셉/씬</p>
    </div>
  );
}

function Frame17({ bankInfo }: { bankInfo: BookingData['bankInfo'] }) {
  return (
    <div className="absolute bg-[#ececec] box-border content-stretch flex flex-col font-['Noto_Sans_KR',_sans-serif] gap-[4px] h-[57px] items-start justify-center leading-[normal] left-[326px] not-italic px-[14px] py-[6px] rounded-[4px] text-[#6d6f72] text-nowrap top-[730px] w-[228px] whitespace-pre">
      <p className="relative shrink-0 text-[6px]" style={{ fontWeight: 700 }}>스튜디오 입금 계좌</p>
      <p className="relative shrink-0 text-[10px]" style={{ fontWeight: 700 }}>{bankInfo.name} {bankInfo.account}</p>
    </div>
  );
}

export default function App() {
  // In a real application, this data would be fetched from an API
  // For example: const [bookingData, setBookingData] = useState<BookingData | null>(null);
  // useEffect(() => { fetchBookingData().then(setBookingData); }, []);
  
  const data = mockBookingData;

  return (
    <div className="bg-white relative size-full" data-name="상품상세내역-자동화">
      <div className="absolute left-0 size-0 top-0" data-name="패스 17">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="path-17"></g>
        </svg>
      </div>
      <div className="absolute left-0 size-0 top-0" data-name="패스 18">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="path-18"></g>
        </svg>
      </div>
      
      {/* Horizontal Lines */}
      <div className="absolute h-0 left-[41px] top-[210px] w-[229px]" data-name="선 44">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 229 1">
            <line stroke="#AAAAAA" x2="229" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[326px] top-[267px] w-[230px]" data-name="선 37">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 230 1">
            <line stroke="#AAAAAA" x2="230" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[326px] top-[103px] w-[230px]" data-name="선 40">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 230 1">
            <line stroke="#AAAAAA" x2="230" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[41px] top-[103px] w-[229px]" data-name="선 46">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 229 1">
            <line stroke="#AAAAAA" x2="229" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[326px] top-[334px] w-[230px]" data-name="선 38">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 230 1">
            <line stroke="#AAAAAA" x2="230" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[326px] top-[398px] w-[228px]" data-name="선 39">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 228 1">
            <line stroke="#AAAAAA" x2="228" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[423px] top-[639px] w-[125px]" data-name="선 48">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 125 1">
            <line stroke="#DDDDDD" x2="125" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[326px] top-[577px] w-[228px]" data-name="선 42">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 228 1">
            <line stroke="#AAAAAA" x2="228" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>

      {/* Customer Name - DYNAMIC */}
      <div className="absolute flex flex-col font-['Noto_Sans_KR',_sans-serif] justify-end leading-[0] left-[40px] not-italic text-[#777777] text-[22px] text-nowrap top-[86px] translate-y-[-100%]">
        <p className="leading-[normal] whitespace-pre" style={{ fontWeight: 700 }}>{data.customerName} 님</p>
      </div>

      {/* Price Labels */}
      <p className="absolute font-['Noto_Sans_KR',_sans-serif] leading-[16px] left-[422px] not-italic text-[#6d6f72] text-[10px] text-nowrap top-[613px] whitespace-pre" style={{ fontWeight: 500 }}>예약금 (선금)</p>
      <p className="absolute font-['Noto_Sans_KR',_sans-serif] leading-[16px] left-[422px] not-italic text-[#6d6f72] text-[10px] text-nowrap top-[592px] whitespace-pre" style={{ fontWeight: 500 }}>촬영비용</p>
      <p className="absolute font-['Noto_Sans_KR',_sans-serif] leading-[16px] left-[417px] not-italic text-[#6d6f72] text-[10px] text-nowrap top-[647px] whitespace-pre" style={{ fontWeight: 500 }}>잔금</p>

      {/* Shoot Date - DYNAMIC */}
      <div className="absolute flex flex-col font-['Radio_Canada',_sans-serif] justify-end leading-[0] left-[269px] text-[#777777] text-[28px] text-nowrap text-right top-[152px] translate-x-[-100%] translate-y-[-100%]" style={{ fontWeight: 600 }}>
        <p className="leading-[normal] whitespace-pre">{data.shootDate}</p>
      </div>

      {/* Shoot Time - DYNAMIC */}
      <div className="absolute flex flex-col font-['Radio_Canada',_sans-serif] justify-end leading-[0] left-[269px] text-[#777777] text-[28px] text-nowrap text-right top-[194px] translate-x-[-100%] translate-y-[-100%]" style={{ fontWeight: 600 }}>
        <p className="leading-[normal] whitespace-pre">{data.shootTime}</p>
      </div>

      {/* Shoot Time Minutes - DYNAMIC */}
      <div className="absolute flex flex-col font-['Radio_Canada',_sans-serif] justify-end leading-[0] left-[548px] text-[#777777] text-[28px] text-nowrap text-right top-[378px] translate-x-[-100%] translate-y-[-100%]" style={{ fontWeight: 600 }}>
        <p className="leading-[normal] whitespace-pre">{data.shootTimeMinutes}</p>
      </div>

      {/* Total Price - DYNAMIC */}
      <div className="absolute flex flex-col font-['Radio_Canada',_sans-serif] justify-end leading-[0] left-[547px] text-[#777777] text-[12px] text-nowrap text-right top-[607px] translate-x-[-100%] translate-y-[-100%]" style={{ fontWeight: 400 }}>
        <p className="leading-[normal] whitespace-pre">{data.totalPrice.toLocaleString()}</p>
      </div>

      {/* Final Cuts - DYNAMIC */}
      <div className="absolute flex flex-col font-['Radio_Canada',_sans-serif] justify-end leading-[0] left-[548px] text-[#777777] text-[28px] text-nowrap text-right top-[315px] translate-x-[-100%] translate-y-[-100%]" style={{ fontWeight: 600 }}>
        <p className="leading-[normal] whitespace-pre">{data.finalCuts}</p>
      </div>

      {/* Deposit - DYNAMIC */}
      <div className="absolute flex flex-col font-['Radio_Canada',_sans-serif] justify-end leading-[0] left-[547px] text-[#777777] text-[12px] text-nowrap text-right top-[629px] translate-x-[-100%] translate-y-[-100%]" style={{ fontWeight: 400 }}>
        <p className="leading-[normal] whitespace-pre">{data.deposit.toLocaleString()}</p>
      </div>

      {/* Balance - DYNAMIC */}
      <div className="absolute flex flex-col font-['Radio_Canada',_sans-serif] justify-end leading-[0] left-[547px] text-[#777777] text-[12px] text-nowrap text-right top-[663px] translate-x-[-100%] translate-y-[-100%]" style={{ fontWeight: 400 }}>
        <p className="leading-[normal] whitespace-pre">{data.balance.toLocaleString()}</p>
      </div>

      {/* Scene Count - DYNAMIC */}
      <div className="absolute flex flex-col font-['Radio_Canada',_sans-serif] justify-end leading-[0] left-[548px] text-[#777777] text-[28px] text-nowrap text-right top-[145px] translate-x-[-100%] translate-y-[-100%]" style={{ fontWeight: 600 }}>
        <p className="leading-[normal] whitespace-pre">{data.sceneCount}</p>
      </div>

      {/* Email - DYNAMIC */}
      <p className="absolute font-['Radio_Canada_Big',_sans-serif] leading-[14px] left-[41px] text-[#777777] text-[10px] text-nowrap top-[223px] whitespace-pre" style={{ fontWeight: 500 }}>{data.email}</p>

      {/* Phone - DYNAMIC */}
      <p className="absolute font-['Radio_Canada_Big',_sans-serif] leading-[14px] left-[41px] text-[#777777] text-[10px] text-nowrap top-[243px] whitespace-pre" style={{ fontWeight: 500 }}>{data.phone}</p>

      {/* Reservation Date - DYNAMIC */}
      <p className="absolute font-['Radio_Canada_Big',_'Noto_Sans_KR',_sans-serif] leading-[14px] left-[41px] text-[#777777] text-[10px] text-nowrap top-[263px] whitespace-pre" style={{ fontWeight: 500 }}>예약확정일 {data.reservationDate}</p>

      {/* Couple Names - DYNAMIC */}
      <p className="absolute font-['Radio_Canada_Big',_sans-serif] leading-[14px] left-[268px] text-[#777777] text-[12px] text-nowrap text-right top-[72px] translate-x-[-100%] whitespace-pre" style={{ fontWeight: 500 }}>{data.coupleNames}</p>

      {/* Title Components */}
      <Titles2 />
      <Titles3 />
      <Titles4 />
      <Titles5 />
      <Titles6 />
      <Titles7 />
      <Titles8 />

      {/* Scenes List - DYNAMIC */}
      <div className="absolute font-['Noto_Sans_KR',_sans-serif] leading-[16px] left-[326px] not-italic text-[#6d6f72] text-[10px] text-nowrap top-[152px] whitespace-pre" style={{ fontWeight: 500 }}>
        {data.scenes.map((scene, index) => (
          <p key={index} className={index < data.scenes.length - 1 ? "mb-0" : ""}>{scene}</p>
        ))}
      </div>

      {/* Options List - DYNAMIC */}
      <div className="absolute font-['Noto_Sans_KR',_sans-serif] leading-[20px] left-[345px] not-italic text-[#6d6f72] text-[10px] text-nowrap top-[453px] whitespace-pre" style={{ fontWeight: 500 }}>
        {data.options.map((option, index) => (
          <p key={index} className={index < data.options.length - 1 ? "mb-0" : ""}>{option.label}</p>
        ))}
      </div>

      {/* Bank Info - DYNAMIC */}
      <Frame17 bankInfo={data.bankInfo} />

      {/* Package Name - DYNAMIC */}
      <div className="absolute flex flex-col font-['Rozha_One',_sans-serif] h-[33px] justify-end leading-[0] left-[329px] not-italic text-[#6dc2b2] text-[34px] top-[89px] translate-y-[-100%] w-[266px]">
        <p className="leading-[1.05]" style={{ fontWeight: 400 }}>{data.packageName}</p>
      </div>

      {/* Product Image - DYNAMIC */}
      <div className="absolute h-[295px] left-[40px] top-[492px] w-[230px]" data-name="image 10">
        <img alt="Product" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={data.productImage || imgImage10} />
      </div>

      {/* Option Checkboxes - DYNAMIC */}
      {data.options.map((option, index) => (
        <div 
          key={index}
          className="absolute bg-white left-[326px] size-[12px]" 
          style={{ top: `${457 + index * 20}px` }}
          data-name={`option-checkbox-${index}`}
        >
          <div aria-hidden="true" className="absolute border border-[#707070] border-solid inset-0 pointer-events-none" />
          {option.checked && (
            <svg className="absolute inset-[2px]" viewBox="0 0 8 8" fill="none">
              <path d="M1 4L3 6L7 2" stroke="#707070" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </div>
      ))}
    </div>
  );
}
