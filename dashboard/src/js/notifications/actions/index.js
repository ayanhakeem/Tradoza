export const NOTIF_SEND = 'NOTIF_SEND';
export const BIG_NOTIF_SEND = 'BIG_NOTIF_SEND';
export const NOTIF_DISMISS = 'NOTIF_DISMISS';
export const BIG_NOTIF_DISMISS = 'BIG_NOTIF_DISMISS';
export const NOTIF_CLEAR = 'NOTIF_CLEAR';

/**
 * Publish a notification,
 * - if `dismissAfter` was set, the notification will be auto dismissed after the given period.
 * - if id wasn't specified, a time based id will be generated.``
 */
export function notifSend(notif) {
  if (!notif.id) {
    notif.id = new Date().getTime();
  }
  return dispatch => {
    dispatch({ type: NOTIF_SEND, payload: notif });

    if (notif.dismissAfter) {
      setTimeout(() => { dispatch({ type: NOTIF_DISMISS, payload: notif.id }); }, notif.dismissAfter);
    }
  };
}


export function bigNotifSend(notif) {
  if (!notif.id) {
    notif.id = new Date().getTime();
  }
  return dispatch => {
    dispatch({ type: BIG_NOTIF_SEND, payload: notif });

    if (notif.dismissAfter) {
      setTimeout(() => { dispatch({ type: BIG_NOTIF_DISMISS, payload: notif.id }); }, notif.dismissAfter);
    }
  };
}

/**
 * Dismiss a notification by the given id.
 */
export function notifDismiss(id) {
  return { type: NOTIF_DISMISS, payload: id };
}


export function bigNotifDismiss(id) {
  return { type: BIG_NOTIF_DISMISS, payload: id };
}

/**
 * Clear all notifications
 */
export function notifClear() {
  return { type: NOTIF_CLEAR };
}