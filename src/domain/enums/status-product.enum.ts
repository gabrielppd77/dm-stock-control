export enum StatusProductEnum {
  AVAILABLE,
  SEPARATION,
  PREPARING,
  SENT,
}

export const StatusProductLabels: EnumLabels = {
  [StatusProductEnum.AVAILABLE]: 'Disponível',
  [StatusProductEnum.SEPARATION]: 'Separação',
  [StatusProductEnum.PREPARING]: 'Preparando',
  [StatusProductEnum.SENT]: 'Enviado',
};
