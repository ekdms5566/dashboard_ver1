import Radar from "react-d3-radar";
import React, { useState } from "react";
import * as d3 from "d3";
import "../styles.css"
import GaugeChart from "react-gauge-chart";


const RadarChart = () =>  {
  const [showA, setShowA] = useState(true);
  const [showB, setShowB] = useState(false);
  const [showC, setShowC] = useState(false);
  const [showD, setShowD] = useState(false);
  const [showE, setShowE] = useState(false);
  const [showF, setShowF] = useState(false);
  const [showG, setShowG] = useState(false);
  const [showH, setShowH] = useState(false);
  const [showI, setShowI] = useState(false);
  const [showJ, setShowJ] = useState(false);
  const [showK, setShowK] = useState(false);
  const [showL, setShowL] = useState(false);
  const [showM, setShowM] = useState(false);
  const [showN, setShowN] = useState(false);
  const [showO, setShowO] = useState(false);
  const [showP, setShowP] = useState(false);
  const [showQ, setShowQ] = useState(false);
  const [showR, setShowR] = useState(false);
  const [showS, setShowS] = useState(false);
  const [showT, setShowT] = useState(false);
  const [showU, setShowU] = useState(false);
  const [showV, setShowV] = useState(false);
  const [showW, setShowW] = useState(false);
  const [showX, setShowX] = useState(false);
  const [showY, setShowY] = useState(false);

  function clickA() {
    setShowA(true);
    setShowB(false);
    setShowC(false);
    setShowD(false);
    setShowE(false);
    setShowF(false);
    setShowG(false);
    setShowH(false);
    setShowI(false);
    setShowJ(false);
    setShowK(false);
    setShowL(false);
    setShowM(false);
    setShowN(false);
    setShowO(false);
    setShowP(false);
    setShowQ(false);
    setShowR(false);
    setShowS(false);
    setShowT(false);
    setShowU(false);
    setShowV(false);
    setShowW(false);
    setShowX(false);
    setShowY(false);
  }

  function clickB() {
    setShowA(false);
    setShowB(true);
    setShowC(false);
    setShowD(false);
    setShowE(false);
    setShowF(false);
    setShowG(false);
    setShowH(false);
    setShowI(false);
    setShowJ(false);
    setShowK(false);
    setShowL(false);
    setShowM(false);
    setShowN(false);
    setShowO(false);
    setShowP(false);
    setShowQ(false);
    setShowR(false);
    setShowS(false);
    setShowT(false);
    setShowU(false);
    setShowV(false);
    setShowW(false);
    setShowX(false);
    setShowY(false);
  }

  function clickC() {
    setShowA(false);
    setShowB(false);
    setShowC(true);
    setShowD(false);
    setShowE(false);
    setShowF(false);
    setShowG(false);
    setShowH(false);
    setShowI(false);
    setShowJ(false);
    setShowK(false);
    setShowL(false);
    setShowM(false);
    setShowN(false);
    setShowO(false);
    setShowP(false);
    setShowQ(false);
    setShowR(false);
    setShowS(false);
    setShowT(false);
    setShowU(false);
    setShowV(false);
    setShowW(false);
    setShowX(false);
    setShowY(false);
  }

  function clickD() {
    setShowA(false);
    setShowB(false);
    setShowC(false);
    setShowD(true);
    setShowE(false);
    setShowF(false);
    setShowG(false);
    setShowH(false);
    setShowI(false);
    setShowJ(false);
    setShowK(false);
    setShowL(false);
    setShowM(false);
    setShowN(false);
    setShowO(false);
    setShowP(false);
    setShowQ(false);
    setShowR(false);
    setShowS(false);
    setShowT(false);
    setShowU(false);
    setShowV(false);
    setShowW(false);
    setShowX(false);
    setShowY(false);
  }

  function clickE() {
    setShowA(false);
    setShowB(false);
    setShowC(false);
    setShowD(false);
    setShowE(true);
    setShowF(false);
    setShowG(false);
    setShowH(false);
    setShowI(false);
    setShowJ(false);
    setShowK(false);
    setShowL(false);
    setShowM(false);
    setShowN(false);
    setShowO(false);
    setShowP(false);
    setShowQ(false);
    setShowR(false);
    setShowS(false);
    setShowT(false);
    setShowU(false);
    setShowV(false);
    setShowW(false);
    setShowX(false);
    setShowY(false);
  }

  function clickF() {
    setShowA(false);
    setShowB(false);
    setShowC(false);
    setShowD(false);
    setShowE(false);
    setShowF(true);
    setShowG(false);
    setShowH(false);
    setShowI(false);
    setShowJ(false);
    setShowK(false);
    setShowL(false);
    setShowM(false);
    setShowN(false);
    setShowO(false);
    setShowP(false);
    setShowQ(false);
    setShowR(false);
    setShowS(false);
    setShowT(false);
    setShowU(false);
    setShowV(false);
    setShowW(false);
    setShowX(false);
    setShowY(false);
  }

  function clickG() {
    setShowA(false);
    setShowB(false);
    setShowC(false);
    setShowD(false);
    setShowE(false);
    setShowF(false);
    setShowG(true);
    setShowH(false);
    setShowI(false);
    setShowJ(false);
    setShowK(false);
    setShowL(false);
    setShowM(false);
    setShowN(false);
    setShowO(false);
    setShowP(false);
    setShowQ(false);
    setShowR(false);
    setShowS(false);
    setShowT(false);
    setShowU(false);
    setShowV(false);
    setShowW(false);
    setShowX(false);
    setShowY(false);
  }

  function clickH() {
    setShowA(false);
    setShowB(false);
    setShowC(false);
    setShowD(false);
    setShowE(false);
    setShowF(false);
    setShowG(false);
    setShowH(true);
    setShowI(false);
    setShowJ(false);
    setShowK(false);
    setShowL(false);
    setShowM(false);
    setShowN(false);
    setShowO(false);
    setShowP(false);
    setShowQ(false);
    setShowR(false);
    setShowS(false);
    setShowT(false);
    setShowU(false);
    setShowV(false);
    setShowW(false);
    setShowX(false);
    setShowY(false);
  }

  function clickI() {
    setShowA(false);
    setShowB(false);
    setShowC(false);
    setShowD(false);
    setShowE(false);
    setShowF(false);
    setShowG(false);
    setShowH(false);
    setShowI(true);
    setShowJ(false);
    setShowK(false);
    setShowL(false);
    setShowM(false);
    setShowN(false);
    setShowO(false);
    setShowP(false);
    setShowQ(false);
    setShowR(false);
    setShowS(false);
    setShowT(false);
    setShowU(false);
    setShowV(false);
    setShowW(false);
    setShowX(false);
    setShowY(false);
  }

  function clickJ() {
    setShowA(false);
    setShowB(false);
    setShowC(false);
    setShowD(false);
    setShowE(false);
    setShowF(false);
    setShowG(false);
    setShowH(false);
    setShowI(false);
    setShowJ(true);
    setShowK(false);
    setShowL(false);
    setShowM(false);
    setShowN(false);
    setShowO(false);
    setShowP(false);
    setShowQ(false);
    setShowR(false);
    setShowS(false);
    setShowT(false);
    setShowU(false);
    setShowV(false);
    setShowW(false);
    setShowX(false);
    setShowY(false);
  }

  function clickK() {
    setShowA(false);
    setShowB(false);
    setShowC(false);
    setShowD(false);
    setShowE(false);
    setShowF(false);
    setShowG(false);
    setShowH(false);
    setShowI(false);
    setShowJ(false);
    setShowK(true);
    setShowL(false);
    setShowM(false);
    setShowN(false);
    setShowO(false);
    setShowP(false);
    setShowQ(false);
    setShowR(false);
    setShowS(false);
    setShowT(false);
    setShowU(false);
    setShowV(false);
    setShowW(false);
    setShowX(false);
    setShowY(false);
  }

  function clickL() {
    setShowA(false);
    setShowB(false);
    setShowC(false);
    setShowD(false);
    setShowE(false);
    setShowF(false);
    setShowG(false);
    setShowH(false);
    setShowI(false);
    setShowJ(false);
    setShowK(false);
    setShowL(true);
    setShowM(false);
    setShowN(false);
    setShowO(false);
    setShowP(false);
    setShowQ(false);
    setShowR(false);
    setShowS(false);
    setShowT(false);
    setShowU(false);
    setShowV(false);
    setShowW(false);
    setShowX(false);
    setShowY(false);
  }

  function clickM() {
    setShowA(false);
    setShowB(false);
    setShowC(false);
    setShowD(false);
    setShowE(false);
    setShowF(false);
    setShowG(false);
    setShowH(false);
    setShowI(false);
    setShowJ(false);
    setShowK(false);
    setShowL(false);
    setShowM(true);
    setShowN(false);
    setShowO(false);
    setShowP(false);
    setShowQ(false);
    setShowR(false);
    setShowS(false);
    setShowT(false);
    setShowU(false);
    setShowV(false);
    setShowW(false);
    setShowX(false);
    setShowY(false);
  }

  function clickN() {
    setShowA(false);
    setShowB(false);
    setShowC(false);
    setShowD(false);
    setShowE(false);
    setShowF(false);
    setShowG(false);
    setShowH(false);
    setShowI(false);
    setShowJ(false);
    setShowK(false);
    setShowL(false);
    setShowM(false);
    setShowN(true);
    setShowO(false);
    setShowP(false);
    setShowQ(false);
    setShowR(false);
    setShowS(false);
    setShowT(false);
    setShowU(false);
    setShowV(false);
    setShowW(false);
    setShowX(false);
    setShowY(false);
  }

  function clickO() {
    setShowA(false);
    setShowB(false);
    setShowC(false);
    setShowD(false);
    setShowE(false);
    setShowF(false);
    setShowG(false);
    setShowH(false);
    setShowI(false);
    setShowJ(false);
    setShowK(false);
    setShowL(false);
    setShowM(false);
    setShowN(false);
    setShowO(true);
    setShowP(false);
    setShowQ(false);
    setShowR(false);
    setShowS(false);
    setShowT(false);
    setShowU(false);
    setShowV(false);
    setShowW(false);
    setShowX(false);
    setShowY(false);
  }

  function clickP() {
    setShowA(false);
    setShowB(false);
    setShowC(false);
    setShowD(false);
    setShowE(false);
    setShowF(false);
    setShowG(false);
    setShowH(false);
    setShowI(false);
    setShowJ(false);
    setShowK(false);
    setShowL(false);
    setShowM(false);
    setShowN(false);
    setShowO(false);
    setShowP(true);
    setShowQ(false);
    setShowR(false);
    setShowS(false);
    setShowT(false);
    setShowU(false);
    setShowV(false);
    setShowW(false);
    setShowX(false);
    setShowY(false);
  }
  function clickQ() {
    setShowA(false);
    setShowB(false);
    setShowC(false);
    setShowD(false);
    setShowE(false);
    setShowF(false);
    setShowG(false);
    setShowH(false);
    setShowI(false);
    setShowJ(false);
    setShowK(false);
    setShowL(false);
    setShowM(false);
    setShowN(false);
    setShowO(false);
    setShowP(false);
    setShowQ(true);
    setShowR(false);
    setShowS(false);
    setShowT(false);
    setShowU(false);
    setShowV(false);
    setShowW(false);
    setShowX(false);
    setShowY(false);
  }
  function clickR() {
    setShowA(false);
    setShowB(false);
    setShowC(false);
    setShowD(false);
    setShowE(false);
    setShowF(false);
    setShowG(false);
    setShowH(false);
    setShowI(false);
    setShowJ(false);
    setShowK(false);
    setShowL(false);
    setShowM(false);
    setShowN(false);
    setShowO(false);
    setShowP(false);
    setShowQ(false);
    setShowR(true);
    setShowS(false);
    setShowT(false);
    setShowU(false);
    setShowV(false);
    setShowW(false);
    setShowX(false);
    setShowY(false);
  }
  function clickS() {
    setShowA(false);
    setShowB(false);
    setShowC(false);
    setShowD(false);
    setShowE(false);
    setShowF(false);
    setShowG(false);
    setShowH(false);
    setShowI(false);
    setShowJ(false);
    setShowK(false);
    setShowL(false);
    setShowM(false);
    setShowN(false);
    setShowO(false);
    setShowP(false);
    setShowQ(false);
    setShowR(false);
    setShowS(true);
    setShowT(false);
    setShowU(false);
    setShowV(false);
    setShowW(false);
    setShowX(false);
    setShowY(false);
  }
  function clickT() {
    setShowA(false);
    setShowB(false);
    setShowC(false);
    setShowD(false);
    setShowE(false);
    setShowF(false);
    setShowG(false);
    setShowH(false);
    setShowI(false);
    setShowJ(false);
    setShowK(false);
    setShowL(false);
    setShowM(false);
    setShowN(false);
    setShowO(false);
    setShowP(false);
    setShowQ(false);
    setShowR(false);
    setShowS(false);
    setShowT(true);
    setShowU(false);
    setShowV(false);
    setShowW(false);
    setShowX(false);
    setShowY(false);
  }
  function clickU() {
    setShowA(false);
    setShowB(false);
    setShowC(false);
    setShowD(false);
    setShowE(false);
    setShowF(false);
    setShowG(false);
    setShowH(false);
    setShowI(false);
    setShowJ(false);
    setShowK(false);
    setShowL(false);
    setShowM(false);
    setShowN(false);
    setShowO(false);
    setShowP(false);
    setShowQ(false);
    setShowR(false);
    setShowS(false);
    setShowT(false);
    setShowU(true);
    setShowV(false);
    setShowW(false);
    setShowX(false);
    setShowY(false);
  }
  function clickV() {
    setShowA(false);
    setShowB(false);
    setShowC(false);
    setShowD(false);
    setShowE(false);
    setShowF(false);
    setShowG(false);
    setShowH(false);
    setShowI(false);
    setShowJ(false);
    setShowK(false);
    setShowL(false);
    setShowM(false);
    setShowN(false);
    setShowO(false);
    setShowP(false);
    setShowQ(false);
    setShowR(false);
    setShowS(false);
    setShowT(false);
    setShowU(false);
    setShowV(true);
    setShowW(false);
    setShowX(false);
    setShowY(false);
  }
  function clickW() {
    setShowA(false);
    setShowB(false);
    setShowC(false);
    setShowD(false);
    setShowE(false);
    setShowF(false);
    setShowG(false);
    setShowH(false);
    setShowI(false);
    setShowJ(false);
    setShowK(false);
    setShowL(false);
    setShowM(false);
    setShowN(false);
    setShowO(false);
    setShowP(false);
    setShowQ(false);
    setShowR(false);
    setShowS(false);
    setShowT(false);
    setShowU(false);
    setShowV(false);
    setShowW(true);
    setShowX(false);
    setShowY(false);
  }
  function clickX() {
    setShowA(false);
    setShowB(false);
    setShowC(false);
    setShowD(false);
    setShowE(false);
    setShowF(false);
    setShowG(false);
    setShowH(false);
    setShowI(false);
    setShowJ(false);
    setShowK(false);
    setShowL(false);
    setShowM(false);
    setShowN(false);
    setShowO(false);
    setShowP(false);
    setShowQ(false);
    setShowR(false);
    setShowS(false);
    setShowT(false);
    setShowU(false);
    setShowV(false);
    setShowW(false);
    setShowX(true);
    setShowY(false);
  }
  function clickY() {
    setShowA(false);
    setShowB(false);
    setShowC(false);
    setShowD(false);
    setShowE(false);
    setShowF(false);
    setShowG(false);
    setShowH(false);
    setShowI(false);
    setShowJ(false);
    setShowK(false);
    setShowL(false);
    setShowM(false);
    setShowN(false);
    setShowO(false);
    setShowP(false);
    setShowQ(false);
    setShowR(false);
    setShowS(false);
    setShowT(false);
    setShowU(false);
    setShowV(false);
    setShowW(false);
    setShowX(false);
    setShowY(true);
  }

  return (
    <div className="App">
      <p id="radarTitle">???????????? ?????? ???????????????</p><br /> <br />
      <button onClick={() => clickA()}>?????????</button>
      <button onClick={() => clickB()}>??????</button>
      <button onClick={() => clickC()}>?????????</button>
      <button onClick={() => clickD()}>?????????</button>
      <button onClick={() => clickE()}>?????????</button>
      <button onClick={() => clickF()}>????????????</button>
      <button onClick={() => clickG()}>?????????</button>
      <button onClick={() => clickH()}>?????????</button>
      <button onClick={() => clickI()}>?????????</button>
      <button onClick={() => clickJ()}>?????????</button>
      <button onClick={() => clickK()}>?????????</button>
      <button onClick={() => clickL()}>????????????</button>
      <button onClick={() => clickM()}>?????????</button>
      <button onClick={() => clickN()}>?????????</button>
      <button onClick={() => clickO()}>????????????</button>
      <button onClick={() => clickP()}>?????????</button>
      <button onClick={() => clickQ()}>?????????</button>
      <button onClick={() => clickR()}>?????????</button>
      <button onClick={() => clickS()}>?????????</button>
      <button onClick={() => clickT()}>?????????</button>
      <button onClick={() => clickU()}>?????????</button>
      <button onClick={() => clickV()}>?????????</button>
      <button onClick={() => clickW()}>?????????</button>
      <button onClick={() => clickX()}>?????????</button>
      <button onClick={() => clickY()}>?????????</button>

      <div id="radarchart">
      {showA ? (
        <>
          <div style={{ padding: "5px 60px" }} id="label2">
            CCTV ??? : 3351??? | ????????? ??? : 6063??? | ????????? ??? : 1772???
          </div>
          <div id="radargauge">
        <div>
          <Radar
            width={500}
            height={500}
            padding={80}
            domainMax={10000}
            highlighted={null}
            data={{
              variables: [
                { key: "cctv", label: "CCTV" },
                { key: "lamp", label: "?????????" },
                { key: "bell", label: "???????????????" }
              ],
              sets: [
                {
                  key: "?????????",
                  values: {
                    cctv: 3351,
                    lamp: 6063,
                    bell: 1772
                  }
                }
              ]
            }}
          /></div><div id="gauge">
          <GaugeChart
            nrOfLevels="4"
            percent={0.55}
            colors={["#FF0000", "#00FF00"]}
          /></div></div>
        </>
      ) : null}

      {showB ? (
        <>
          <div id="label2" style={{ padding: "5px 60px" }}>
            CCTV ??? : 907??? | ????????? ??? : 1000??? | ????????? ??? : 613???
          </div>
          <div id="radargauge">
        <div>
          <Radar
            width={500}
            height={500}
            padding={80}
            domainMax={10000}
            highlighted={null}
            data={{
              variables: [
                { key: "cctv", label: "CCTV" },
                { key: "lamp", label: "?????????" },
                { key: "bell", label: "???????????????" }
              ],
              sets: [
                {
                  key: "??????",
                  values: {
                    cctv: 907,
                    lamp: 1000,
                    bell: 613
                  }
                }
              ]
            }}
          /></div><div id="gauge">
          <GaugeChart
            nrOfLevels="4"
            percent={0.7}
            colors={["#FF0000", "#00FF00"]}
          /></div></div>
        </>
      ) : null}

      {showC ? (
        <>
          <div id="label2" style={{ padding: "5px 60px" }}>
            CCTV ??? : 1648??? | ????????? ??? : 1000??? | ????????? ??? : 106???
          </div>
          <div id="radargauge">
        <div>
          <Radar
            width={500}
            height={500}
            padding={80}
            domainMax={10000}
            highlighted={null}
            data={{
              variables: [
                { key: "cctv", label: "CCTV" },
                { key: "lamp", label: "?????????" },
                { key: "bell", label: "???????????????" }
              ],
              sets: [
                {
                  key: "?????????",
                  values: {
                    cctv: 1648,
                    lamp: 1000,
                    bell: 106
                  }
                }
              ]
            }}
          /></div><div id="gauge">
          <GaugeChart
            nrOfLevels="4"
            percent={0.63}
            colors={["#FF0000", "#00FF00"]}
          /></div></div>
        </>
      ) : null}

      {showD ? (
        <>
          <div id="label2" style={{ padding: "5px 60px" }}>
            CCTV ??? : 3537??? | ????????? ??? : 1000??? | ????????? ??? : 1067???
          </div>
          <div id="radargauge">
        <div>
          <Radar
            width={500}
            height={500}
            padding={80}
            domainMax={10000}
            highlighted={null}
            data={{
              variables: [
                { key: "cctv", label: "CCTV" },
                { key: "lamp", label: "?????????" },
                { key: "bell", label: "???????????????" }
              ],
              sets: [
                {
                  key: "?????????",
                  values: {
                    cctv: 3537,
                    lamp: 1000,
                    bell: 1067
                  }
                }
              ]
            }}
          /></div><div id="gauge">
          <GaugeChart
            nrOfLevels="4"
            percent={0.26}
            colors={["#FF0000", "#00FF00"]}
          /></div></div>
        </>
      ) : null}

      {showE ? (
        <>
          <div id="label2" style={{ padding: "5px 60px" }}>
            CCTV ??? : 908??? | ????????? ??? : 3605??? | ????????? ??? : 1027???
          </div>
          <div id="radargauge">
        <div>
          <Radar
            width={500}
            height={500}
            padding={80}
            domainMax={10000}
            highlighted={null}
            data={{
              variables: [
                { key: "cctv", label: "CCTV" },
                { key: "lamp", label: "?????????" },
                { key: "bell", label: "???????????????" }
              ],
              sets: [
                {
                  key: "?????????",
                  values: {
                    cctv: 908,
                    lamp: 3605,
                    bell: 1027
                  }
                }
              ]
            }}
          /></div><div id="gauge">
          <GaugeChart
            nrOfLevels="4"
            percent={0.64}
            colors={["#FF0000", "#00FF00"]}
          /></div></div>
        </>
      ) : null}

      {showF ? (
        <>
          <div id="label2" style={{ padding: "5px 60px" }}>
            CCTV ??? : 3771??? | ????????? ??? : 1000??? | ????????? ??? : 1103???
          </div>
          <div id="radargauge">
          <div>
          <Radar
            width={500}
            height={500}
            padding={80}
            domainMax={10000}
            highlighted={null}
            data={{
              variables: [
                { key: "cctv", label: "CCTV" },
                { key: "lamp", label: "?????????" },
                { key: "bell", label: "???????????????" }
              ],
              sets: [
                {
                  key: "????????????",
                  values: {
                    cctv: 3771,
                    lamp: 1000,
                    bell: 1103
                  }
                }
              ]
            }}
          /></div><div id="gauge">
          <GaugeChart
            nrOfLevels="4"
            percent={0.37}
            colors={["#FF0000", "#00FF00"]}
          /></div></div>
        </>
      ) : null}

      {showG ? (
        <>
          <div id="label2" style={{ padding: "5px 60px" }}>
            CCTV ??? : 959??? | ????????? ??? : 4695??? | ????????? ??? : 677???
          </div>
          <div id="radargauge">
          <div>
          <Radar
            width={500}
            height={500}
            padding={80}
            domainMax={10000}
            highlighted={null}
            data={{
              variables: [
                { key: "cctv", label: "CCTV" },
                { key: "lamp", label: "?????????" },
                { key: "bell", label: "???????????????" }
              ],
              sets: [
                {
                  key: "?????????",
                  values: {
                    cctv: 959,
                    lamp: 4695,
                    bell: 677
                  }
                }
              ]
            }}
          /></div><div id="gauge">
          <GaugeChart
            nrOfLevels="4"
            percent={0.26}
            colors={["#FF0000", "#00FF00"]}
          /></div></div>
        </>
      ) : null}

      {showH ? (
        <>
          <div id="label2" style={{ padding: "5px 60px" }}>
            CCTV ??? : 1162??? | ????????? ??? : 4682??? | ????????? ??? : 880???
          </div>
          <div id="radargauge">
          <div>
          <Radar
            width={500}
            height={500}
            padding={80}
            domainMax={10000}
            highlighted={null}
            data={{
              variables: [
                { key: "cctv", label: "CCTV" },
                { key: "lamp", label: "?????????" },
                { key: "bell", label: "???????????????" }
              ],
              sets: [
                {
                  key: "?????????",
                  values: {
                    cctv: 1162,
                    lamp: 4682,
                    bell: 880
                  }
                }
              ]
            }}
          /></div><div id="gauge">
          <GaugeChart
            nrOfLevels="4"
            percent={0.71}
            colors={["#FF0000", "#00FF00"]}
          /></div></div>
        </>
      ) : null}

      {showI ? (
        <>
          <div id="label2" style={{ padding: "5px 60px" }}>
            CCTV ??? : 3475??? | ????????? ??? : 1000??? | ????????? ??? : 1042???
          </div>
          <div id="radargauge">
          <div>
          <Radar
            width={500}
            height={500}
            padding={80}
            domainMax={10000}
            highlighted={null}
            data={{
              variables: [
                { key: "cctv", label: "CCTV" },
                { key: "lamp", label: "?????????" },
                { key: "bell", label: "???????????????" }
              ],
              sets: [
                {
                  key: "?????????",
                  values: {
                    cctv: 3475,
                    lamp: 1000,
                    bell: 1042
                  }
                }
              ]
            }}
          /></div><div id="gauge">
          <GaugeChart
            nrOfLevels="4"
            percent={0.46}
            colors={["#FF0000", "#00FF00"]}
          /></div></div>
        </>
      ) : null}

      {showJ ? (
        <>
          <div id="label2" style={{ padding: "5px 60px" }}>
            CCTV ??? : 1300??? | ????????? ??? : 1000??? | ????????? ??? : 820???
          </div>
          <div id="radargauge">
        <div>
          <Radar
            width={500}
            height={500}
            padding={80}
            domainMax={10000}
            highlighted={null}
            data={{
              variables: [
                { key: "cctv", label: "CCTV" },
                { key: "lamp", label: "?????????" },
                { key: "bell", label: "???????????????" }
              ],
              sets: [
                {
                  key: "?????????",
                  values: {
                    cctv: 1300,
                    lamp: 1000,
                    bell: 820
                  }
                }
              ]
            }}
          /></div><div id="gauge">
          <GaugeChart
            nrOfLevels="4"
            percent={0.66}
            colors={["#FF0000", "#00FF00"]}
          /></div></div>
        </>
      ) : null}
      {showK ? (
        <>
          <div id="label2" style={{ padding: "5px 60px" }}>
            CCTV ??? : 3303??? | ????????? ??? : 1000??? | ????????? ??? : 18???
          </div>
          <div id="radargauge">
          <div>
          <Radar
            width={500}
            height={500}
            padding={80}
            domainMax={10000}
            highlighted={null}
            data={{
              variables: [
                { key: "cctv", label: "CCTV" },
                { key: "lamp", label: "?????????" },
                { key: "bell", label: "???????????????" }
              ],
              sets: [
                {
                  key: "?????????",
                  values: {
                    cctv: 3303,
                    lamp: 1000,
                    bell: 18
                  }
                }
              ]
            }}
          /></div><div id="gauge">
          <GaugeChart
            nrOfLevels="4"
            percent={0.56}
            colors={["#FF0000", "#00FF00"]}
          /></div></div>
        </>
      ) : null}
      {showL ? (
        <>
          <div id="label2" style={{ padding: "5px 60px" }}>
            CCTV ??? : 1140??? | ????????? ??? : 3230??? | ????????? ??? : 401???
          </div>
          <div id="radargauge">
<div>
          <Radar
            width={500}
            height={500}
            padding={80}
            domainMax={10000}
            highlighted={null}
            data={{
              variables: [
                { key: "cctv", label: "CCTV" },
                { key: "lamp", label: "?????????" },
                { key: "bell", label: "???????????????" }
              ],
              sets: [
                {
                  key: "????????????",
                  values: {
                    cctv: 1140,
                    lamp: 3230,
                    bell: 401
                  }
                }
              ]
            }}
          /></div><div id="gauge">
          <GaugeChart
            nrOfLevels="4"
            percent={0.76}
            colors={["#FF0000", "#00FF00"]}
          /></div></div>
        </>
      ) : null}
      {showM ? (
        <>
          <div id="label2" style={{ padding: "5px 60px" }}>
            CCTV ??? : 1140??? | ????????? ??? : 3230??? | ????????? ??? : 401???
          </div>
          <div id="radargauge">
        <div>
          <Radar
            width={500}
            height={500}
            padding={80}
            domainMax={10000}
            highlighted={null}
            data={{
              variables: [
                { key: "cctv", label: "CCTV" },
                { key: "lamp", label: "?????????" },
                { key: "bell", label: "???????????????" }
              ],
              sets: [
                {
                  key: "?????????",
                  values: {
                    cctv: 1140,
                    lamp: 3230,
                    bell: 401
                  }
                }
              ]
            }}
          /></div><div id="gauge">
          <GaugeChart
            nrOfLevels="4"
            percent={0.26}
            colors={["#FF0000", "#00FF00"]}
          /></div></div>
        </>
      ) : null}
      {showN ? (
        <>
          <div id="label2" style={{ padding: "5px 60px" }}>
            CCTV ??? : 2201??? | ????????? ??? : 3160??? | ????????? ??? : 1676???
          </div>
          <div id="radargauge">
        <div>
          <Radar
            width={500}
            height={500}
            padding={80}
            domainMax={10000}
            highlighted={null}
            data={{
              variables: [
                { key: "cctv", label: "CCTV" },
                { key: "lamp", label: "?????????" },
                { key: "bell", label: "???????????????" }
              ],
              sets: [
                {
                  key: "?????????",
                  values: {
                    cctv: 2001,
                    lamp: 3160,
                    bell: 1676
                  }
                }
              ]
            }}
          /></div><div id="gauge">
          <GaugeChart
            nrOfLevels="4"
            percent={0.36}
            colors={["#FF0000", "#00FF00"]}
          /></div></div>
        </>
      ) : null}
      {showO ? (
        <>
          <div id="label2" style={{ padding: "5px 60px" }}>
            CCTV ??? : 2628??? | ????????? ??? : 1000??? | ????????? ??? : 740???
          </div>
          <div id="radargauge">
        <div>
          <Radar
            width={500}
            height={500}
            padding={80}
            domainMax={10000}
            highlighted={null}
            data={{
              variables: [
                { key: "cctv", label: "CCTV" },
                { key: "lamp", label: "?????????" },
                { key: "bell", label: "???????????????" }
              ],
              sets: [
                {
                  key: "????????????",
                  values: {
                    cctv: 2628,
                    lamp: 1000,
                    bell: 740
                  }
                }
              ]
            }}
          /></div><div id="gauge">
          <GaugeChart
            nrOfLevels="4"
            percent={0.46}
            colors={["#FF0000", "#00FF00"]}
          /></div></div>
        </>
      ) : null}
      {showP ? (
        <>
          <div id="label2" style={{ padding: "5px 60px" }}>
            CCTV ??? : 1134??? | ????????? ??? : 4567??? | ????????? ??? : 0???
          </div>
          <div id="radargauge">
          <div>
          <Radar
            width={500}
            height={500}
            padding={80}
            domainMax={10000}
            highlighted={null}
            data={{
              variables: [
                { key: "cctv", label: "CCTV" },
                { key: "lamp", label: "?????????" },
                { key: "bell", label: "???????????????" }
              ],
              sets: [
                {
                  key: "?????????",
                  values: {
                    cctv: 1134,
                    lamp: 4567,
                    bell: 0
                  }
                }
              ]
            }}
          /></div><div id="gauge">
          <GaugeChart
            nrOfLevels="4"
            percent={0.56}
            colors={["#FF0000", "#00FF00"]}
          />
          </div></div>
        </>
      ) : null}
      {showQ ? (
        <>
          <div id="label2" style={{ padding: "5px 60px" }}>
            CCTV ??? : 2009??? | ????????? ??? : 1000??? | ????????? ??? : 61???
          </div>
          <div id="radargauge">
          <div>
          <Radar
            width={500}
            height={500}
            padding={80}
            domainMax={10000}
            highlighted={null}
            data={{
              variables: [
                { key: "cctv", label: "CCTV" },
                { key: "lamp", label: "?????????" },
                { key: "bell", label: "???????????????" }
              ],
              sets: [
                {
                  key: "?????????",
                  values: {
                    cctv: 2009,
                    lamp: 1000,
                    bell: 61
                  }
                }
              ]
            }}
          /></div><div id="gauge">
          <GaugeChart
            nrOfLevels="4"
            percent={0.24}
            colors={["#FF0000", "#00FF00"]}
          /></div></div>
        </>
      ) : null}
      {showR ? (
        <>
          <div id="label2" style={{ padding: "5px 60px" }}>
            CCTV ??? : 2346??? | ????????? ??? : 1000??? | ????????? ??? : 658???
          </div>
          <div id="radargauge">
          <div>
          <Radar
            width={500}
            height={500}
            padding={80}
            domainMax={10000}
            highlighted={null}
            data={{
              variables: [
                { key: "cctv", label: "CCTV" },
                { key: "lamp", label: "?????????" },
                { key: "bell", label: "???????????????" }
              ],
              sets: [
                {
                  key: "?????????",
                  values: {
                    cctv: 2346,
                    lamp: 1000,
                    bell: 658
                  }
                }
              ]
            }}
          /></div><div id="gauge">
          <GaugeChart
            nrOfLevels="4"
            percent={0.46}
            colors={["#FF0000", "#00FF00"]}
          /></div></div>
        </>
      ) : null}
      {showS ? (
        <>
          <div id="label2" style={{ padding: "5px 60px" }}>
            CCTV ??? : 4325??? | ????????? ??? : 1000??? | ????????? ??? : 820???
          </div>
          <div id="radargauge">
          <div>
          <Radar
            width={500}
            height={500}
            padding={80}
            domainMax={10000}
            highlighted={null}
            data={{
              variables: [
                { key: "cctv", label: "CCTV" },
                { key: "lamp", label: "?????????" },
                { key: "bell", label: "???????????????" }
              ],
              sets: [
                {
                  key: "?????????",
                  values: {
                    cctv: 4325,
                    lamp: 1000,
                    bell: 820
                  }
                }
              ]
            }}
          />
          </div><div id="gauge">
          <GaugeChart
            nrOfLevels="4"
            percent={0.76}
            colors={["#FF0000", "#00FF00"]}
          />
          </div></div>
        </>
      ) : null}
      {showT ? (
        <>
          <div id="label2" style={{ padding: "5px 60px" }}>
            CCTV ??? : 911??? | ????????? ??? : 2722??? | ????????? ??? : 780???
          </div>
          <div id="radargauge">
          <div>
          <Radar
            width={500}
            height={500}
            padding={80}
            domainMax={10000}
            highlighted={null}
            data={{
              variables: [
                { key: "cctv", label: "CCTV" },
                { key: "lamp", label: "?????????" },
                { key: "bell", label: "???????????????" }
              ],
              sets: [
                {
                  key: "?????????",
                  values: {
                    cctv: 911,
                    lamp: 2722,
                    bell: 780
                  }
                }
              ]
            }}
          />
          </div><div id="gauge">
          <GaugeChart
            nrOfLevels="4"
            percent={0.26}
            colors={["#FF0000", "#00FF00"]}
          />
          </div></div>
        </>
      ) : null}
      {showU ? (
        <>
          <div id="label2" style={{ padding: "5px 60px" }}>
            CCTV ??? : 4642??? | ????????? ??? : 2939??? | ????????? ??? : 988???
          </div>
          <div id="radargauge">
        <div>
          <Radar
            width={500}
            height={500}
            padding={80}
            domainMax={10000}
            highlighted={null}
            data={{
              variables: [
                { key: "cctv", label: "CCTV" },
                { key: "lamp", label: "?????????" },
                { key: "bell", label: "???????????????" }
              ],
              sets: [
                {
                  key: "?????????",
                  values: {
                    cctv: 4642,
                    lamp: 2939,
                    bell: 988
                  }
                }
              ]
            }}
          />
          </div><div id="gauge">
          <GaugeChart
            nrOfLevels="4"
            percent={0.56}
            colors={["#FF0000", "#00FF00"]}
          />
          </div></div>
        </>
      ) : null}
      {showV ? (
        <>
          <div id="label2" style={{ padding: "5px 60px" }}>
            CCTV ??? : 2437??? | ????????? ??? : 1000??? | ????????? ??? : 848???
          </div>
          <div id="radargauge">
          <div>
          <Radar
            width={500}
            height={500}
            padding={80}
            domainMax={10000}
            highlighted={null}
            data={{
              variables: [
                { key: "cctv", label: "CCTV" },
                { key: "lamp", label: "?????????" },
                { key: "bell", label: "???????????????" }
              ],
              sets: [
                {
                  key: "?????????",
                  values: {
                    cctv: 2437,
                    lamp: 1000,
                    bell: 848
                  }
                }
              ]
            }}
          />
          </div>
          <div id="gauge">
          <GaugeChart
            nrOfLevels="4"
            percent={0.26}
            colors={["#FF0000", "#00FF00"]}
          />
          </div></div>
        </>
      ) : null}
      {showW ? (
        <>
          <div id="label2" style={{ padding: "5px 60px" }}>
            CCTV ??? : 1415??? | ????????? ??? : 1000??? | ????????? ??? : 22???
          </div>
          <div id="radargauge">
            <div>
          <Radar
            width={500}
            height={500}
            padding={80}
            domainMax={10000}
            highlighted={null}
            data={{
              variables: [
                { key: "cctv", label: "CCTV" },
                { key: "lamp", label: "?????????" },
                { key: "bell", label: "???????????????" }
              ],
              sets: [
                {
                  key: "?????????",
                  values: {
                    cctv: 1415,
                    lamp: 1000,
                    bell: 22
                  }
                }
              ]
            }}
          /></div><div id="gauge">
          <GaugeChart
            nrOfLevels="4"
            percent={0.16}
            colors={["#FF0000", "#00FF00"]}
          /></div></div>
        </>
      ) : null}
      {showX ? (
        <>
          <div id="label2" style={{ padding: "5px 60px" }}>
            CCTV ??? : 1495??? | ????????? ??? : 1000??? | ????????? ??? : 1037???
          </div>
          <div id="radargauge">
            <div>
          <Radar
            width={500}
            height={500}
            padding={80}
            domainMax={10000}
            highlighted={null}
            data={{
              variables: [
                { key: "cctv", label: "CCTV" },
                { key: "lamp", label: "?????????" },
                { key: "bell", label: "???????????????" }
              ],
              sets: [
                {
                  key: "?????????",
                  values: {
                    cctv: 1495,
                    lamp: 1000,
                    bell: 1037
                  }
                }
              ]
            }}
          />
          </div>
          <div id="gauge">
          <GaugeChart
            nrOfLevels="4"
            percent={0.66}
            colors={["#FF0000", "#00FF00"]}
          />
          </div>
          </div>
        </>
      ) : null}
      {showY ? (
        <>
          <div id="label2" style={{ padding: "5px 60px" }}>
            CCTV ??? : 6759??? | ????????? ??? : 10635??? | ????????? ??? : 2813???
          </div>
          <div id="radargauge">
            <div>
          <Radar
            width={500}
            height={500}
            padding={80}
            domainMax={10000}
            highlighted={null}
            data={{
              variables: [
                { key: "cctv", label: "CCTV" },
                { key: "lamp", label: "?????????" },
                { key: "bell", label: "???????????????" }
              ],
              sets: [
                {
                  key: "?????????",
                  values: {
                    cctv: 6759,
                    lamp: 10635,
                    bell: 2813
                  }
                }
              ]
            }}
          />
          </div>
          <div id="gauge">
          <GaugeChart
            nrOfLevels="4"
            percent={0.88}
            colors={["#FF0000", "#00FF00"]}
          />
          </div>
          </div>
        </>
      ) : null}
      </div>   
    </div>
  );
};

export default RadarChart;

