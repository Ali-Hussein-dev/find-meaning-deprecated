import { assign, Machine } from "xstate";
import { fetcher, fetcher2 } from "../hooks/useFetcher";
import * as vars from "../hooks/variables";
import store from "store2";
import { owlbotToken } from "../hooks/_privateVariables";

export const searchMachine2 = Machine(
  {
    id: "search",
    initial: "idle",
    context: {
      renders: 0,
      query: "",
      twinData: null,
      urbanData: null,
      owlbotImg: null,
      owlbot: null,
      linguaRobot: null,
      searchWords: [{ value: "bar" }, { value: "beer" }, { value: "pen" }],
    },
    states: {
      idle: {
        on: {
          TYPING_START: "typing",
        },
      },
      typing: {
        on: {
          INPUT: { actions: "getQuery" },
          CLEAR_INPUT: { actions: "cleanQuery" },
          SUBMIT: {
            target: "loadingLinguaRobot",
            cond: (c, e) => c.query.length > 0,
          },
        },
      },
      loadingTwin: {
        invoke: {
          id: "twinwordID",
          src: (c, e) =>
            fetcher(vars.xHostTwinword, vars.twinwordUrl + c.query),
          onDone: {
            target: "resolved",
            actions: assign({
              twinData: (c, e) => e.data,
            }),
          },
          onError: "rejected",
        },
      },
      loadingUrban: {
        invoke: {
          id: "urbanID",
          src: (c, e) => fetcher(vars.xHostUrban, vars.urbanUrl + c.query),
          onDone: {
            target: "resolved",
            actions: assign({
              urbanData: (c, e) => e.data,
            }),
          },
          onError: "rejected",
        },
      },
      loadingOwlbot: {
        invoke: {
          id: "owlBotID",
          src: (c, e) => fetcher2(vars.owlbotUrl + c.query, owlbotToken),
          onDone: {
            target: "resolved",
            actions: ["owlbotData", "triggerRerender"],
          },
          onError: {
            target: "rejected",
            actions: ["triggerRerender"],
          },
        },
      },
      loadingLinguaRobot: {
        invoke: {
          id: "linguaRobotID",
          src: (c, e) =>
            fetcher(vars.xHostLinguaRobot, vars.linguaRobotUrl + c.query),
          onDone: {
            target: "loadingOwlbot",
            actions: [
              "linguaRobotData",
              "setQueryInLocalStorage",
              "updateSearchWords",
            ],
          },
          onError: "rejected",
        },
      },
      resolved: {
        // type: "final", target: "idle"
        on: {
          INPUT: "typing",
        },
      },
      rejected: {
        on: {
          INPUT: "typing",
        },
      },
    },
  },
  {
    actions: {
      getQuery: assign({ query: (c, e) => e.value }),
      cleanQuery: assign({ query: (c, e) => "" }),
      owlbotData: assign({
        owlbot: (c, e) => e.data,
        owlbotImg: (c, e) => e.data,
      }),
      setQueryInLocalStorage: (c, e) => {
        return localStorage.setItem(c.query, c.query);
      },
      updateSearchWords: assign({
        searchWords: (c, e) => {
          let arr = [];
          for (let o in store()) {
            arr.push({ value: o });
          }
          return arr;
        },
      }),
      linguaRobotData: assign({
        linguaRobot: (c, e) => e.data,
      }),
      triggerRerender: assign({ renders: (c, e) => c.renders + 1 }),
      updateSearchContext: ""
    },
  }
);
