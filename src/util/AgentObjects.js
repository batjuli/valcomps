import valorantLogo from '../images/valorantLogo.png';
import jettLogo from '../images/jett.png';
import phoenixLogo from '../images/phoenix.png';
import razeLogo from '../images/raze.png';
import reynaLogo from '../images/reyna.png';
import yoruLogo from '../images/yoru.png';
import astraLogo from '../images/astra.png';
import brimstoneLogo from '../images/brimstone.png';
import omenLogo from '../images/omen.png';
import viperLogo from '../images/viper.png';
import breachLogo from '../images/breach.png';
import skyeLogo from '../images/skye.png';
import sovaLogo from '../images/sova.png';
import cypherLogo from '../images/cypher.png';
import killjoyLogo from '../images/killjoy.png';
import sageLogo from '../images/sage.png';

export const emptyAgent = {
  img: valorantLogo,
  name: 'Agent',
  code: 'oo',
  role: null,
};

export const jett = {
  img: jettLogo,
  name: 'Jett',
  code: 'je',
  role: 'Duelist',
};

export const phoenix = {
  img: phoenixLogo,
  name: 'Phoenix',
  code: 'ph',
  role: 'Duelist',
};

export const raze = {
  img: razeLogo,
  name: 'Raze',
  code: 'ra',
  role: 'Duelist',
};

export const reyna = {
  img: reynaLogo,
  name: 'Reyna',
  code: 're',
  role: 'Duelist',
};

export const yoru = {
  img: yoruLogo,
  name: 'Yoru',
  code: 'yo',
  role: 'Duelist',
};

export const astra = {
  img: astraLogo,
  name: 'Astra',
  code: 'as',
  role: 'Controller',
};

export const brimstone = {
  img: brimstoneLogo,
  name: 'Brimstone',
  code: 'bs',
  role: 'Controller',
};

export const omen = {
  img: omenLogo,
  name: 'Omen',
  code: 'om',
  role: 'Controller',
};

export const viper = {
  img: viperLogo,
  name: 'Viper',
  code: 'vi',
  role: 'Controller',
};

export const breach = {
  img: breachLogo,
  name: 'Breach',
  code: 'br',
  role: 'Initiator',
};

export const skye = {
  img: skyeLogo,
  name: 'Skye',
  code: 'sk',
  role: 'Initiator',
};

export const sova = {
  img: sovaLogo,
  name: 'Sova',
  code: 'so',
  role: 'Initiator',
};

export const cypher = {
  img: cypherLogo,
  name: 'Cypher',
  code: 'cy',
  role: 'Sentinel',
};

export const killjoy = {
  img: killjoyLogo,
  name: 'Killjoy',
  code: 'kj',
  role: 'Sentinel',
};

export const sage = {
  img: sageLogo,
  name: 'Sage',
  code: 'sa',
  role: 'Sentinel',
};

// function for decoding a team id (10 letters, each 2 represents an agent)
export const decode = (teamId) => {
  console.log('decoding');
  // if invalid teamid, return all empty
  if (teamId.length !== 10) {
    return [emptyAgent, emptyAgent, emptyAgent, emptyAgent, emptyAgent];
  }
  // split string into segments of 2
  const agentCodes = teamId.match(/.{2}/g); // regex to split into matches of any 2 characters
  // construct result array from codes
  let res = [];

  // helper function for adding agent to res
  const addAgent = (agent) => {
    // if agent already in res, instead add empty agent
    if (res.includes(agent)) {
      res.push(emptyAgent);
    } else {
      res.push(agent);
    }
  };

  for (let code of agentCodes) {
    console.log(code);
    switch (code) {
      case jett.code:
        addAgent(jett);
        break;
      case phoenix.code:
        addAgent(phoenix);
        break;
      case raze.code:
        addAgent(raze);
        break;
      case reyna.code:
        addAgent(reyna);
        break;
      case yoru.code:
        addAgent(yoru);
        break;
      case astra.code:
        addAgent(astra);
        break;
      case brimstone.code:
        addAgent(brimstone);
        break;
      case omen.code:
        addAgent(omen);
        break;
      case viper.code:
        addAgent(viper);
        break;
      case breach.code:
        addAgent(breach);
        break;
      case skye.code:
        addAgent(skye);
        break;
      case sova.code:
        addAgent(sova);
        break;
      case cypher.code:
        addAgent(cypher);
        break;
      case killjoy.code:
        addAgent(killjoy);
        break;
      case sage.code:
        addAgent(sage);
        break;
      default:
        res.push(emptyAgent);
    }
  }
  return res;
};