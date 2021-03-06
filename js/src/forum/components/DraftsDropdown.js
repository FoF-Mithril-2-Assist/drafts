/*
 *
 *  This file is part of fof/drafts.
 *
 *  Copyright (c) 2019 FriendsOfFlarum.
 *
 *  For the full copyright and license information, please view the LICENSE.md
 *  file that was distributed with this source code.
 *
 */

import NotificationsDropdown from 'flarum/components/NotificationsDropdown';

import DraftsList from './DraftsList';

export default class DraftsDropdown extends NotificationsDropdown {
    static initProps(props) {
        props.label = props.label || app.translator.trans('fof-drafts.forum.dropdown.tooltip');
        props.icon = props.icon || 'fas fa-edit';

        super.initProps(props);
    }

    init() {
        super.init();

        this.list = new DraftsList();
    }

    goToRoute() {
        m.route(app.route('drafts'));
    }

    getUnreadCount() {
        if (app.cache.draftsLoaded) {
            return app.store.all('drafts').length;
        }

        return app.store.all('drafts').length + app.session.user.draftCount();
    }

    getNewCount() {
        return this.getUnreadCount();
    }
}
