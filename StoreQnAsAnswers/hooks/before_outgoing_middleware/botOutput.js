  const getIntentAnalytics = async () => {
    //we check if the KVS exist (If an intent was triggered in the conversation)
    //if not we exit this hook
    const exist = await bp.kvs.forBot(event.botId).exists(event.threadId)
    if (!exist) {
      return
    }

    const intentAnalytics = await bp.kvs.forBot(event.botId).get(event.threadId)
    bp.kvs.forBot(event.botId).delete(event.threadId)
    intentAnalytics['Answer'] = event.preview
    bp.logger.info('intentAnalytics', intentAnalytics)
  }

  return getIntentAnalytics()