/*
  Return Weton date from julian day.
*/
const julian = require('julian');
const datenum = require('./datenum');
const cumsum = require('./cumsum');

// const wuku = require('./wuku');
const { wuku, wulan, bulan, taun, windu, kurup, pasaran, mingguJV } = require('./properties');

function wetonan(dt) {
  const result = {
    pasaran: null,
    dina: null,
    wuku: null,
    date: null,
    d: null,
    wulan: null,
    t: null,
    taun: null,
    windu: null,
    kurup: null,
    day: null,
    month: null,
    year: null,
    mulya: null,
  }
  // dt => julian day
  // 24 March 1936 => Selasa Pon 1 Sura 1867 Alip Adi Salasiyah (ASAPON)
  //  start a change of wulan length in each Tahun

  // Origin date = 1 Sura 1555 Alip Kuntara
  const taun0 = 1555;
  const t0 = datenum(1633, 7, 8);

  const t1 = datenum(1936, 3, 24);

  // determine number of days in wulan per taun
  // taun 1,3,5,6,7
  const w354 = [1,0,1,0,1,0,1,0,1,0,1,0].map(item => item + 29);
  // taun 2,4,8
  const w355 = [1,0,1,0,1,0,1,0,1,0,1,1].map(item => item + 29);
  // taun 5 (Dal) before 1936-2-26
  const wdal = [1,1,0,0,0,0,1,0,1,0,1,1].map(item => item + 29);

  // Calendar of taun in windu
  // before 1936-3-26
  const hw0 = [w354,w355,w354,w355,wdal,w354,w354,w355];
  // after 1936-3-26
  const hw1 = [w354,w355,w354,w355,w354,w354,w354,w355];

  if ( dt < t0 ) throw new Error(`date required to be after ${julian.toDate(t0).toLocaleString()}`)

  let dti = dt - t0;
  dti += Math.floor(dti / (15*81*7*5 - 1));
  
  // relative date into the windu
  let dw = ( dti % (81*7*5)) + 1;

  let calendar_ref;
  if (dt < t1) {
    calendar_ref = hw0;
  } else {
    calendar_ref = hw1;
  }

  // find(_, 1) the first 1 indices
  // where number of days in month calendar_ref is equal or greater than dw
  // kk = find(cumsum(calendar_ref(:)) >= dw,1);
  const flatten = calendar_ref.flat(2);
  const cum_calendar_ref = cumsum(flatten);
  const kk = cum_calendar_ref.filter(item => item >= dw)[0];
  // [wulan_index,taun_index] = ind2sub(size(hw0),kk);
  // index in whole months in a windu (8 taun)
  const wulan_idx = cum_calendar_ref.indexOf(kk) % 12;
  const taun_idx = Math.floor(cum_calendar_ref.indexOf(kk) / 12);

  // weton date
  let dina;
  if (cum_calendar_ref.indexOf(kk) === 0) {
    dina = dw;
  } else {
    dina = dw - flatten.splice(0, cum_calendar_ref.indexOf(kk)).reduce((acc, val) => acc + val);
  }

  const taunNumber = Math.floor(dti / (81*7*5)) * 8 + taun_idx + taun0;
  const pasaran_idx = (dw) % 5;
  const minggu_idx = ((dw + 1) % 7);
  // dt - 6 for week started on Sunday
  // dt - 7 for week started on Monday
  const wuku_idx = ( Math.floor(( dt - 6 ) / 7) + 10 ) % 30;
  const windu_idx = ( Math.floor(dti / (81*7*5)) + 1 ) % 4;
  const kurup_idx = (( Math.floor(dti/ (15*81*7*5)) ) % 7) + 1;
  
  let mulya = '';
  if (dina == 1 && wulan_idx == 0) mulya = 'Siji Sura';
  if (taun_idx == 0 && wulan_idx == 2 && pasaran_idx == 1) mulya = 'Aboge';
  if (taun_idx == 4 && minggu_idx == 5 && pasaran_idx == 3) mulya = 'Daltugi';
  if (wuku_idx == 11 && minggu_idx == 5 && pasaran_idx == 2) mulya = 'Kuningan';
  if (wuku_idx == 28 && minggu_idx == 1 && pasaran_idx == 2) mulya = 'Hanggara Asih';
  if (wuku_idx == 29 && minggu_idx == 4 && pasaran_idx == 2) mulya = 'Dina Mulya';
  if (minggu_idx == 4 && pasaran_idx == 3) mulya = 'Dina Purnama';

  result.pasaran = pasaran[pasaran_idx];
  result.dina = mingguJV[minggu_idx];
  result.wuku = wuku[wuku_idx];
  result.date = dt;
  result.d = dina;
  result.wulan = wulan[wulan_idx];
  result.t = taunNumber;
  result.taun = taun[taun_idx];
  result.windu = windu[windu_idx];
  result.kurup = kurup[kurup_idx];
  result.mulya = mulya;
  result.day = julian.toDate(dt).getDate();
  result.month = bulan[julian.toDate(dt).getMonth()];
  result.year = julian.toDate(dt).getFullYear();

  return result
}

module.exports = wetonan