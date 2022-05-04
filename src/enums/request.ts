export enum requestStatus {
  idle = 'idle',
  loading = 'loading',
  succeeded = 'succeeded',
  failed = 'failed',
}
export type RequestStatusType =
  | requestStatus.idle
  | requestStatus.loading
  | requestStatus.succeeded
  | requestStatus.failed;
