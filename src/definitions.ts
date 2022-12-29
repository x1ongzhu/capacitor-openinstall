export interface OpeninstallPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
