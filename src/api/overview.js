import endpoints from './api_endpoints'
import {api} from '@/api/index';


export default {
  getCampaignDetails(brand_id,campaign_id) {
      const url = endpoints.pendingDetails + brand_id + '/campaign/' + campaign_id
    return api.get(url);
  },
  getChannels() {
  return api.get(endpoints.channels);
},
  getCampaignMilestones(id) {
    const url = endpoints.campaignMilestone + id + '/campaigns/milestones/count'
    return api.get(url);
  },
  getCategories() {
    return api.get(endpoints.categories);
  },
  getCampaignDetailsShort(bid,mid) {
    const url1 = endpoints.campaignList + bid + '/milestones/' + mid + '/campaign'
    return api.get(url1)
  },
  getInfluencerDetails(cid) {
    const url2 = endpoints.campaignDetails + cid +'/influencer'
    return api.get(url2)
  },
  deleteDraftCampaign(cid) {
    const url3 = endpoints.campaignDetails + cid
    return api.delete(url3)
  }
  // getCampaignDetailsShort(id) {
  //   const url1 = endpoints.campaignList + id + '/campaign'
  //   return api.get(url1)
  // }
}