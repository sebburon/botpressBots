  bp.logger.info("1")
  if (event.nlu.intent.name == 'none') {
    return
  }
bp.logger.info("2")
  //if we found an elected intent
  if (event.nlu.intent.name != 'none') {
    bp.logger.info('We got asked a QnA')
    //we crate an analytics object in the state
    const intentAnalytics = {
      Conversation: event.threadId,
      Message: event.payload.text,
      Answer: 'None'
    }
    bp.kvs.forBot(event.botId).set(event.threadId, intentAnalytics)
  }