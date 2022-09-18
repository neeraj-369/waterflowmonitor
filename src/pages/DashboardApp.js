import { faker } from '@faker-js/faker';

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
        const a = [];
        const b = [];
        const c = [];
        const d = [];
        let piea = 0;
        let pieb = 0;
        let piec = 0;

        response.data.feeds.forEach((sample) => {
          a.push(sample.field1);
          b.push(sample.field2);
          const ss = new Date(sample.created_at).toLocaleString(undefined, { timeZone: 'Asia/Kolkata' });
          c.push(sample.created_at);
          const currentdate = new Date();
          // console.log(currentdate);
          settest(currentdate);
          const st = currentdate.getDate() - currentdate.getDay();
          const end = currentdate.getDate();
          const month = currentdate.getMonth();
          const year = currentdate.getFullYear();
          const yr = ss.getFullYear();
          const dt = ss.getDate();
          if (ss.getMonth() == month && yr==year && (dt>=ss && dt<=end) ) {
            if (ss.getDay() == 1) {
              setMon(mon + sample.field2);
            }
            if (ss.getDay() == 2) {
              setTue(tue + sample.field2);
            }
            if (ss.getDay() == 3) {
              setWed(wed + sample.field2);
            }
            if (ss.getDay() == 4) {
              setThu(thu + sample.field2);
            }
            if (ss.getDay() == 5) {
              setFri(fri + sample.field2);
            }
            if (ss.getDay() == 6) {
              setSat(sat + sample.field2);
            }
            if (ss.getDay() == 7) {
              setSun(sun + sample.field2);
            }
          }
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


        // const currentdate = new Date();
        // console.log(currentdate.getDay());

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
        console.log("error");
      });
    axios
      .get(link)
      .then((response) => {
        setDetails(response.data);
        const a = [];
        const b = [];
        const c = [];
        const d = [];
        let piea = 0;
        let pieb = 0;
        let piec = 0;

        response.data.feeds.forEach((sample) => {
          a.push(sample.field1);
          b.push(sample.field2);
          const ss = new Date(sample.created_at).toLocaleString(undefined, { timeZone: 'Asia/Kolkata' });
          c.push(sample.created_at);
          const currentdate = new Date();
          console.log(currentdate);
          settest(currentdate);

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
        console.log("error");
      });

  }, []);

  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        {/* <p>{test}</p> */}
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
              title="TOTAL VOLUME"
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
              title="FLOW RATE"
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
              title="DAY WISE"
              chartLabels={['Sunday','Monday',
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
                  data: [sun,mon,tue,wed,thu,fri,sat],
                }
              ]}
            />
          </Grid>

        </Grid>
      </Container>
    </Page>
  );
}
