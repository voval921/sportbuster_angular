import {Formula1PilotInterface, Formula1SessionInterface, Formula1SessionResultsInterface} from "../interface/formula1";

export class Formula1Session implements Formula1SessionInterface {

  nation: string;
  tournamentId: number;
  tournamentName: string;
  sessionId: number;
  sessionType: string;

  constructor(nation:string, tournamentId: number, tournamentName: string,
              sessionId: number, sessionType:string) {
    this.nation = nation;
    this.tournamentId = tournamentId;
    this.tournamentName = tournamentName;
    this.sessionId = sessionId;
    this.sessionType = sessionType;
  }

}


export class Formula1Pilot implements Formula1PilotInterface {

  pilotId: number;
  pilotName: string;
  pilotSurname: string;

  constructor(pilotId: number, pilotName: string, pilotSurname: string) {
    this.pilotId = pilotId;
    this.pilotName = pilotName;
    this.pilotSurname = pilotSurname;
  }

}


export class Formula1SessionResults implements Formula1SessionResultsInterface {

  manche: number;
  position: number;
  fastestLap: string;
  startingPosition: number;
  speedTrap: number

  constructor(manche: number, position: number, fastestLap: string,
  startingPosition: number, speedTrap: number) {
    this.manche = manche;
    this.position = position;
    this.fastestLap = fastestLap;
    this.startingPosition = startingPosition;
    this.speedTrap = speedTrap;
  }

}
