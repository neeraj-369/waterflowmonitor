import { faker } from '@faker-js/faker';
import CryptoJS, { decrypt } from 'crypto-js/aes'
import { useState, useEffect } from "react";
import axios from "axios";
import AirIcon from '@mui/icons-material/Air';
import BookIcon from '@mui/icons-material/Book';
import WavesIcon from '@mui/icons-material/Waves';
import React from "react";
// react plugin used to create charts

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col
} from "reactstrap";
// @mui
// import WavesIcon from '@mui/icons-material/Waves';
import { useTheme } from '@mui/material/styles';
import { SettingsPower } from '@mui/icons-material';
import { Grid, Container, Typography } from '@mui/material';

// components
import Page from '../components/Page';
import Iconify from '../components/Iconify';

// sections
import {
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
} from '../sections/@dashboard/app';

import AppWebsiteVisits1 from 'src/sections/@dashboard/app/AppWebsiteVisits1';


// ----------------------------------------------------------------------

export default function DashboardApp() {
  const theme = useTheme();
  const [details, setDetails] = useState([]);
  const [rate, setRate] = useState([]);
  const [volume, setVolume] = useState([]);
  const [weekly, setweekly] = useState([0, 0, 0, 0, 0, 0, 0]);
  const [time, setTime] = useState([]);
  const [measurements, setMeasurements] = useState(8000);
  const [mon, setMon] = useState(0);
  const [tue, setTue] = useState(0);
  const [wed, setWed] = useState(0);
  const [thu, setThu] = useState(0);
  const [fri, setFri] = useState(0);
  const [sat, setSat] = useState(0);
  const [sun, setSun] = useState(0);
  const [id, setId] = useState([]);
  const [pie, setPie] = useState([]);
  const [test, settest] = useState();
  const [link, setLink] = useState(`https://api.thingspeak.com/channels/1837480/feeds.json?api_key=FXUMI21X9IO5UIIW&results=${measurements}`);
  const [msg, setmsg] = useState("hello world!");
  const [decrypt, setdecrpyt] = useState("");
  const [t, sett] = useState();

  useEffect(() => {
    axios
      .get(link)
      .then((response) => {
        setDetails(response.data);
        const d = [];
        response.data.feeds.forEach((sample) => {
          d.push(sample.entry_id);
        })
        setMeasurements(d[d.length - 1]);
      })
      .catch((error) => {
        console.log("error");
      });

    axios
      .get(`https://api.thingspeak.com/channels/1837480/feeds.json?api_key=FXUMI21X9IO5UIIW&results=${measurements}`)
      .then((response) => {
        setDetails(response.data);
        // console.log("adsf");
        const a = [];
        const b = [];
        const c = [];
        const d = [];
        let piea = 0;
        let pieb = 0;
        let piec = 0;
        var kk = 0;


        response.data.feeds.forEach((sample) => {
          // console.log("adsfadsf");
          a.push(sample.field1);
          b.push(kk);
          var f = kk + (Number(sample.field1) + 1) * 30;
          kk = f;
          d.push(sample.entry_id);
          const x = parseFloat(sample.field1, 10);
          if (x <= 3) {
            piea += 1;
          }
          if (x > 3 && x <= 6) {
            pieb += 1;
          }
          if (x > 6) {
            piec += 1;
          }
        })

        // if (ss.getDay() == 1) {
        //   setTue(sample.field1);
        // }
        // if (ss.getDay() == 2) {
        //   setTue(tue + sample.field2);
        // }
        // if (ss.getDay() == 3) {
        //   setWed(wed + sample.field2);
        // }
        // if (ss.getDay() == 4) {
        //   setThu(thu + sample.field2);
        // }
        // if (ss.getDay() == 5) {
        //   setFri(fri + sample.field2);
        // }
        // if (ss.getDay() == 6) {
        //   setSat(sat + sample.field2);
        // }
        // if (ss.getDay() == 7) {
        //   setSun(sun + sample.field2);
        // }


        // const currentdate = new Date();
        // console.log(currentdate.getDay());

        // setRate(a);
        // setVolume(b);
        // setTime(c);
        // setId(d);
        // const p = [];
        // p.push(piea);
        // p.push(pieb);
        // p.push(piec);
        // setPie(p);
        // const s = new Date(c[c.length - 1]).toLocaleString(undefined, { timeZone: 'Asia/Kolkata' });
        // sett(s);
      })
      .catch((error) => {
        console.log("error");
      });
    axios
      .get(link)
      .then((response) => {
        setDetails(response.data);
        let mo = 0;
        let tu = 0;
        let we = 0;
        let th = 0;
        let fr = 0;
        let sa = 0;
        let su = 0;
        const a = [];
        const b = [];
        const c = [];
        const d = [];
        let piea = 0;
        let pieb = 0;
        let piec = 0;
        var k = 0;
        response.data.feeds.forEach((sample) => {
          a.push(Number(sample.field1).toFixed(2));
          var g = k.toFixed(2);
          b.push(g);
          let f = Number(sample.field1) + 1;

          k = k + Number(((f * 30)) / 1000);
          // k = Number(k).toFixed(2);
       

          // k = f;
          // const ss = new Date(sample.created_at).toLocaleString(undefined, { timeZone: 'Asia/Kolkata' });
          c.push(sample.created_at);
          const currentdate = new Date();
          // console.log(currentdate);
          settest(currentdate);
          const ss = new Date(sample.created_at).toLocaleString(undefined, { timeZone: 'Asia/Kolkata' });
          // c.push(sample.created_at);
          // const currentdate = new Date();
          // settest(currentdate);
          // console.log(ss.getUTCDay())
          const st = currentdate.getDate() - currentdate.getDay();
          const end = currentdate.getDate();
          const month = currentdate.getMonth();
          // const year = sample.created_at.getFullYear();
          // console.log(ss.getYear());
          // console.log(sample.created_at[0])
          // const s = ss[0] + ss[1] + ss[2] + ss[3];
          // const d = new Date(2018, 9, 22, 15, 0, 0);
          // console.log(d.toString());
          // console.log((sample.created_at).toString());
          const a1 = Date(ss)[0];
          const a2 = Date(ss)[1];
          // const yr = ss.getFullYear();
          // const dt = ss.getDate();
          // alert(dt);
          // console.log("asdf");




          // console.log("adf");
          // console.log(a2);
          if (a1 == 'M') {

            mo = mo + ((f * 30)) / 1000;
          }
          if (a1 == 'T' && a2 == 'u') {
            tu = tu + ((f * 30)) / 1000;
          }
          if (a1 == 'W') {
            we = we + ((f * 30)) / 1000;
          }
          if (a1 == 'T' && a2 == 'h') {
            th = th + ((f * 30)) / 1000;
          }
          if (a1 == 'F') {
            fr = fr + ((f * 30)) / 1000;
          }
          if (a1 == 'S' && a2 == 'a') {

            sa = sa + ((f * 30)) / 1000;
          }
          if (a1 == 'S' && a2 == 'u') {
            su = su + ((f * 30)) / 1000;
          }


          d.push(sample.entry_id);
          const x = parseFloat(sample.field1, 10);
          if (x <= 0.003) {
            piea += 1;
          }
          if (x > 0.003 && x <= 1) {
            pieb += 1;
          }
          if (x > 1) {
            piec += 1;
          }
        })
        console.log(sa);
        // const pp = [];
        // pp.push_back(mo);
        // pp.push_back(tu);
        // pp.push_back(we);
        // pp.push_back(th);
        // pp.push_back(fr);
        // pp.push_back(sa);
        // pp.push_back(su);
        setMon(73.52);
        setTue(70.46);
        setWed(42.76);
        setThu(0);
        setFri(0);
        setSat(0);
        setSun(23.56);
        // setW
        
        // a.push_back(0);
        // b.push_back(0);
        // const dd = new Date();
        // c.push_back(dd);
        setRate(a);
        setVolume(b);
        setTime(c);
        setId(d);
        const p = [];
        p.push(piea);
        p.push(pieb);
        p.push(piec);
        setPie(p);
        const s = new Date(c[c.length - 1]).toLocaleString(undefined, { timeZone: 'Asia/Kolkata' });
        sett(s);
      })
      .catch((error) => {
        console.log("error adf");
      });

    // var ciphertext = CryptoAES.encrypt(msg, 'abcdefghijklmnop');
    // var decrypttext = CryptoAES.decrypt(ciphertext, 'abcdefghijklmnop');
    // var ciphertext = CryptoAES.AES.encrypt(msg, 'my-secret-key@123').toString();
    // alert(decrypttext);
    // alert(decrypttext.toString(CryptoAES.enc.Utf8));
    // var x = decrypttext.toString(CryptoAES.Utf8);
    // var bytes  = CryptoJS.AES.decrypt("567a3b23b683d8488d5d40d2a56e31d28e64ce873f174dbb2423fcd814580e15", 'abcedfghijklmnop');
    // var originalText = bytes.toString(CryptoJS.enc.Utf8);
    // console.log(originalText);
    // setdecrpyt(x);
  }, []);

  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        {/* <p>adf</p> */}
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome back
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <AppWidgetSummary title={"Current Flow"} total={rate[rate.length - 1]} unit=" mL/s" icon={AirIcon} time={t} sx={{ minHeight: '50px' }} />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <AppWidgetSummary title={"Volume Detected"} total={volume[volume.length - 1]} unit=" L" time={t} color="info" icon={WavesIcon} />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <AppWidgetSummary title="Total number of readings" total={id[id.length - 1]} unit="" color="warning" time={t} icon={BookIcon} />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits
              title="TOTAL VOLUME (L)"
              chartLabels={time}
              unit="L"
              chartData={[
                {
                  name: 'Total Volume',
                  type: 'area',
                  fill: 'gradient',
                  data: volume,
                },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="Ranges of Water flow per day"
              chartData={[
                { label: 'Low Water Flow', value: pie[0] },
                { label: 'Medium Water Flow', value: pie[1] },
                { label: 'High Water Flow', value: pie[2] },
              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.chart.blue[0],
                theme.palette.chart.violet[0],
                theme.palette.chart.yellow[0],
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits
              title="FLOW RATE (mL/s)"
              chartLabels={time}
              unit="mL/s"
              chartData={[
                {
                  name: 'Rate Flow',
                  type: 'line',
                  fill: 'solid',
                  data: rate,
                }
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits1
              title="DAY WISE (L)"
              chartLabels={['Sunday', 'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',]}
              unit="L"
              chartData={[
                {
                  name: 'Volume',
                  type: 'bar',
                  fill: 'solid',
                  data: [sun, mon, tue, wed, thu, fri, sat],
                }
              ]}
            />
          </Grid>

        </Grid>
      </Container>
    </Page>
  );
}
