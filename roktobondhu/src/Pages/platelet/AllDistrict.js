import React from 'react';

const AllDistrict = ({setDistrict}) => {
    return (
        <label className='custom-select icon-upper icon-down mt-4'>
        <select onChange={(e)=>setDistrict(e.target.value)} className='platelet-group pl-2 border rounded text-black lg:w-96 lg:h-10 md:w-96 sm:w-60 sm:h-10' >
              <option>ঢাকা</option>
              <option>গাজীপুর</option>
              <option>গোপালগঞ্জ</option>
              <option>টাঙ্গাইল</option>
              <option>নরসিংদী</option>
              <option>নারায়ণগঞ্জ</option>
              <option>ফরিদপুর</option>
              <option>মাদারিপুর</option>
              <option>মানিকগঞ্জ</option>
              <option>মুন্সিগঞ্জ</option>
              <option>রাজবাড়ী</option>
              <option>শরিয়তপুর</option>
              <option>কিশোরগঞ্জ</option>
              <option>চট্টগ্রাম</option>
              <option>কুমিল্লা</option>
              <option>ব্রাহ্মণবাড়িয়া</option>
              <option>চাঁদপুর</option>
              <option>লক্ষ্মীপুর</option>
              <option>নোয়াখালী</option>
              <option>ফেনী</option>
              <option>খাগড়াছড়ি</option>
              <option>রাঙ্গামাটি</option>
              <option>কক্সবাজার</option>
              <option>রাজশাহী</option>
              <option>চাঁপাইনবাবগঞ্জ</option>
              <option>জয়পুরহাট</option>
              <option>নওগাঁ</option>
              <option>নাটোর</option>
              <option>পাবনা</option>
              <option>বগুড়া</option>
              <option>সিরাজগঞ্জ</option>
              <option>খুলনা</option>
              <option>চুয়াডাঙ্গা</option>
              <option>ঝিনাইদহ</option>
              <option>নড়াইল</option>
              <option>বাগেরহাট</option>
              <option>কুষ্টিয়া</option>
              <option>মাগুরা</option>
              <option>মেহেরপুর</option>
              <option>যশোর</option>
              <option>সাতক্ষীরা</option>
              <option>বরিশাল</option>
              <option>পটুয়াখালী</option>
              <option>ভোলা</option>
              <option>পিরোজপুর</option>
              <option>বরগুনা</option>
              <option>ঝালকাঠি</option>
              <option>সিলেট</option>
              <option>মৌলভীবাজার</option>
              <option>হবিগঞ্জ</option>
              <option>সুনামগঞ্জ</option>
              <option>রংপুর</option>
              <option>কুড়িগ্রাম</option>
              <option>গাইবান্ধা</option>
              <option>ঠাকুরগাঁও</option>
              <option>দিনাজপুর</option>
              <option>নীলফামারী</option>
              <option>পঞ্চগড়</option>
              <option>লালমনিরহাট</option>
              <option>ময়মনসিংহ</option>
              <option>জামালপুর</option>
              <option>নেত্রকোনা</option>
              <option>শেরপুর</option>
          </select>
        </label>
    );
};

export default AllDistrict;