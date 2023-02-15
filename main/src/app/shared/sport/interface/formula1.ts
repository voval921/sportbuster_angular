export interface Formula1SessionInterface {
  nation: string;
  tournamentId: number;
  tournamentName: string;
  sessionId: number;
  sessionType: string;
}


export interface Formula1PilotInterface {
  pilotId: number;
  pilotName: string;
  pilotSurname: string;
}

export interface Formula1SessionResultsInterface {

  manche?: number;
  position?: number;
  fastestLap?: string;
  startingPosition?: number;
  speedTrap?: number

}
