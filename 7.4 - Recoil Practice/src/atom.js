import { atom, selector } from "recoil"


export const networkCountAtom = atom({
    key: 'networkCountAtom',
    default: 45
})

export const jobsCountAtom = atom({
    key: 'jobsCountAtom',
    default: 5
})

export const messageCountAtom = atom({
    key: 'messageCountAtom',
    default: 3
})

export const notificationCountAtom = atom({
    key: 'notificationCountAtom',
    default: 104
})

export const allNotificationSelector = selector({
    key: 'allNotificationSelector',
    get: ({ get }) => {
        const networkCount = get(networkCountAtom);
        const jobsCount = get(jobsCountAtom);
        const messageCount = get(messageCountAtom);
        const notificationCount = get(notificationCountAtom);

        return networkCount + jobsCount + messageCount + notificationCount;
    }
})